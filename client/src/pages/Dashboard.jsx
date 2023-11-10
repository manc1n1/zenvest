//import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../utils/LoginContext';

function Dashboard() {
    const { login } = useLoginContext();
	const navigate = useNavigate();

	// Redirect to the login page if the user is not logged in
	if (!login.loggedIn) {
		navigate('/login');
		return null;
	}

    return (
        console.log("Dashboard loaded successfully")
    )
};

export default Dashboard;