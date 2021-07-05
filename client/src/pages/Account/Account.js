import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import { ReactComponent as Account } from '../../assets/account.svg';
import { AccountContainer } from './Account.style';
import { AuthContext } from '../../contexts/AuthContext';
import NotFound from '../NotFound/NotFound';

const User = () => {
    const { isAuthenticated } = React.useContext(AuthContext);

    if (isAuthenticated) return <Navigate to="/" />;
    else if (isAuthenticated === false)
        return (
            <AccountContainer>
                <div className="image">
                    <Account />
                </div>
                <div className="forms">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<SignUp />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </AccountContainer>
        );
    else return null;
};

export default User;
