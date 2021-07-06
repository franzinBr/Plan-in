import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './themes/default';
import GlobalStyle from './App.style';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { AuthProvider } from './contexts/AuthContext';
import Account from './pages/Account/Account';
import Dashboard from './pages/Dashboard/Dashboard';
import AdminRoute from './components/Helper/AdminRoute/AdminRoute';
import NotFound from './pages/NotFound/NotFound';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AuthProvider>
                    <GlobalStyle />
                    <div className="App">
                        <Header />
                        <main className="MainContainer">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="/account/*"
                                    element={<Account />}
                                />
                                <AdminRoute
                                    path="/dashboard"
                                    element={<Dashboard />}
                                />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </main>
                    </div>
                </AuthProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
