import { createContext, useState, useEffect } from 'react';
import { api } from '../services/api';
import jwt_decode from 'jwt-decode';
import {
    loginRequest,
    logoutRequest,
    refreshRequest,
    signUpRequest,
} from '../services/auth';
import { useNavigate } from 'react-router-dom';
import { cookieExists } from '../utils/cookieExists';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    const login = async (userOrEmail, password) => {
        try {
            setError(null);
            setLoading(true);
            const res = await loginRequest({ userOrEmail, password });

            if (!res.data.success) throw new Error(res.data.message);

            if (res.data.success) {
                navigate('/');
                setUser(res.data);
                setIsAuthenticated(true);
                api.defaults.headers[
                    'Authorization'
                ] = `Bearer ${res.data.authToken}`;
                if (res.data.user.role === 'admin') setIsAdmin(true);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const signUp = async (fullname, username, email, password) => {
        try {
            setError(null);
            setLoading(true);
            const res = await signUpRequest({
                fullname,
                username,
                email,
                password,
            });

            if (!res.data.success) throw new Error(res.data.message);

            navigate('/account/login');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setError(null);
        setLoading(false);
        setUser({});
        setIsAuthenticated(false);
        setIsAdmin(false);
        await logoutRequest();
        api.defaults.headers['Authorization'] = '';
        navigate('/');
    };

    useEffect(() => {
        let expiresIn;
        let timeout;

        const refresh = async () => {
            if (cookieExists('aux', true)) {
                try {
                    setLoading(true);
                    setError(null);
                    const res = await refreshRequest();
                    if (!res?.data?.success || !res)
                        throw new Error(res.data.message);
                    setUser(res.data);
                    api.defaults.headers[
                        'Authorization'
                    ] = `Bearer ${res.data.authToken}`;
                    setIsAuthenticated(true);
                    if (res.data.user.role === 'admin') setIsAdmin(true);
                    setLoading(false);
                    const exp = jwt_decode(res.data.authToken).exp;
                    return { refreshed: true, exp };
                } catch (error) {
                    if (isAuthenticated) {
                        setError(null);
                        setUser({});
                        setIsAuthenticated(false);
                        setIsAdmin(false);
                        await logoutRequest();
                        api.defaults.headers['Authorization'] = '';
                        navigate('/');
                        setLoading(false);
                        return { refreshed: false, exp: null };
                    }
                }
            }
            return { refreshed: false, exp: null };
        };

        const refreshListener = async () => {
            const { refreshed, exp } = await refresh();
            if (refreshed) {
                expiresIn = exp * 1000 - new Date().getTime();
                clearTimeout(timeout);
                timeout = setTimeout(refreshListener, expiresIn);
                return;
            }
        };
        refreshListener();

        return () => clearTimeout(timeout);
    }, [isAuthenticated, navigate]);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                isAdmin,
                user,
                loading,
                error,
                login,
                signUp,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
