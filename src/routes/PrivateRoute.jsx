import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth(); // Get user state and loading state
    const location = useLocation(); // To redirect user back after login

    // 1. Show a loader while Firebase checks the user's state
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner text-primary loading-lg"></span>
        </div>;
    }

    // 2. If user exists and loading is false, render the children (the protected page)
    if (user) {
        return children;
    }

    // 3. If no user, redirect them to the login page, saving their intended path
    return <Navigate to="/login" state={{ from: location }} replace />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;