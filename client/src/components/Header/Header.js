import React from 'react';
import { HeaderContainer } from './Header.style';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { isAuthenticated, isAdmin, logout } = React.useContext(AuthContext);

    const clickLogout = async () => {
        await logout();
    };

    return (
        <HeaderContainer>
            <nav>
                <div className="logo">
                    <Link to="/">
                        <h1>
                            Plan-<span>in</span>.
                        </h1>
                    </Link>
                </div>
                <div className="links">
                    {isAdmin === true && <Link to="/dashboard">Dashboard</Link>}
                    {isAuthenticated ? (
                        <p onClick={clickLogout}>Logout</p>
                    ) : (
                        <>
                            <Link to="/account/login">
                                <p>Login</p>
                            </Link>
                            <Link to="/account/signup">
                                <p>Sign Up</p>
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </HeaderContainer>
    );
};

export default Header;
