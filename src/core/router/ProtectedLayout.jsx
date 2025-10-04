import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import NavBar from '../../components/commons/navbar-protected/NavbarProtected';
import Footer from '../../components/commons/footer/Footer';
import { useSelector } from 'react-redux';
function ProtectedLayout() {
    const { isLoggedIn } = useSelector((state) => state.auth);
    if (!isLoggedIn) {
        return <Navigate to={'/login'} replace />;
    }
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <Outlet />
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default ProtectedLayout;
