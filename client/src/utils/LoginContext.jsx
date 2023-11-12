import { createContext, useContext, useState } from 'react';

// Initialize new context for logged in
const LoginContext = createContext();

// We create a custom hook to provide immediate usage of the login context in other components
export const useLoginContext = () => useContext(LoginContext);

// LoginProvider component that holds initial state, returns provider component
// Which pages does the user need to be logged in to gain access to??
export const LoginProvider = ({ children }) => {
	const [login, setLogin] = useState({
		loggedIn: null,
		userId: '',
	});

	// Login User
	const loginUser = async (email, password) => {
		try {
			const response = await fetch('/api/users/login', {
				method: 'POST',
				body: JSON.stringify({ email, password }),
				headers: { 'Content-Type': 'application/json' },
			});

			if (response.ok) {
				const userData = await response.json();

				setLogin({
					loggedIn: true,
					userId: userData.userId, // Set the user ID from the response
				});

				document.location.replace('/dashboard');
			} else {
				alert('Login failed. Please check your credentials.');
			}
		} catch (error) {
			console.error('Error during login:', error);
		}
	};

	// Logout User
	const logoutUser = async () => {
		try {
			const response = await fetch('/api/users/logout', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
			});

			if (response.ok) {
				setLogin({
					loggedIn: false,
					userId: '',
				});

				document.location.replace('/');
			} else {
				alert('Logout failed. Please try again.');
			}
		} catch (error) {
			console.error('Error during logout:', error);
		}
	};

	// Provider components expect a value prop to be passed
	return (
		<LoginContext.Provider
			value={{ login, setLogin, loginUser, logoutUser }}
		>
			{/* Render children passed from props */}
			{children}
		</LoginContext.Provider>
	);
};
