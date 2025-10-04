import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './PublicLayout';
import ProtectedLayout from './ProtectedLayout';
import LoginPage from '../pages/login/LoginPage';
import HomePage from '../pages/home/HomePage';

export default function RouterProvider() {
    return (
        <Router>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<ProtectedLayout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    );
}
