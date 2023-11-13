import { createContext, useContext, useState, useEffect } from 'react';
import Auth from '../utils/auth';

// Initialize new context for logged in
const LoginContext = createContext();

// Function to get inital login state from storage
const getInitialLoginState = () => {
	const storedLoginState = localStorage.getItem('loginState');
	return storedLoginState
		? JSON.parse(storedLoginState)
		: { loggedIn: false, userToken: null };
};

// We create a custom hook to provide immediate usage of the login context in other components
export const useLoginContext = () => useContext(LoginContext);

// LoginProvider component that holds initial state, returns provider component
// Which pages does the user need to be logged in to gain access to??
export const LoginProvider = ({ children }) => {
	const [login, setLogin] = useState(getInitialLoginState);

	useEffect(() => {
		localStorage.setItem('loginState', JSON.stringify(login));
	}, [login]);

	const loginUser = async (email, password) => {
		try {
			const response = await fetch('/api/user/login', {
				method: 'POST',
				body: JSON.stringify({ email, password }),
				headers: { 'Content-Type': 'application/json' },
			});
			if (response.ok) {
				const data = await response.json();
				Auth.login(data.token);
				setLogin({
					loggedIn: true,
					userToken: data.token,
				});
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
			if (response.ok) {
				const data = await response.json();
				Auth.login(data.token);
				setLogin({
					loggedIn: true,
					userToken: data.token,
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
		Auth.logout(localStorage.getItem('id_token'));
		setLogin({
			loggedIn: false,
			userToken: null,
		});
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
