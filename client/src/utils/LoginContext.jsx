import { createContext, useContext, useState } from 'react';
import Auth from '../utils/auth';

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

	const loginUser = async (email, password) => {
		try {
			const response = await fetch('/api/user/login', {
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

				// document.location.replace('/dashboard');
			} else {
				alert('Login failed. Please check your credentials.');
			}
		} catch (err) {
			console.error('Error during login:', err);
		}
	};

	const signUpUser = async (username, email, password) => {
		try {
			const response = await fetch('/api/user/signup', {
				method: 'POST',
				body: JSON.stringify({ username, email, password }),
				headers: { 'Content-Type': 'application/json' },
			});

			const data = await response.json();

			if (response.ok) {
				console.log(data.token);

				Auth.login(data.token);

				setLogin({
					loggedIn: true,
					userId: '',
				});
			}
			if (response.status === 400) {
				alert('Email already exists.');
			}
		} catch (err) {
			console.error('Error during sign up:', err);
		}
	};

	const logoutUser = async () => {
		try {
			const response = await fetch('/api/user/logout', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
			});

			if (response.ok) {
				setLogin({
					loggedIn: false,
					userId: '',
				});

				// document.location.replace('/');
			} else {
				alert('Logout failed. Please try again.');
			}
		} catch (err) {
			console.error('Error during logout:', err);
		}
	};

	// Provider components expect a value prop to be passed
	return (
		<LoginContext.Provider
			value={{ login, setLogin, loginUser, logoutUser, signUpUser }}
		>
			{/* Render children passed from props */}
			{children}
		</LoginContext.Provider>
	);
};
