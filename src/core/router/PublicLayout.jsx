import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import NavBar from '../../components/commons/navbar-public/NavBarPublic';
import Footer from '../../components/commons/footer/Footer';
import { useSelector } from 'react-redux';

function PublicLayout() {
    const { isLoggedIn } = useSelector((state) => state.auth);
    if (isLoggedIn) {
        return <Navigate to={'/'} replace />;
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

export default PublicLayout;
