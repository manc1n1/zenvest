import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Auth from '../utils/auth';

// Initialize new context for logged in
const LoginContext = createContext();

// Function to get inital login state from storage
const getInitialLoginState = () => {
	const storedLoginState = localStorage.getItem('loginState');
	return storedLoginState
		? JSON.parse(storedLoginState)
		: {
				loggedIn: false,
				userToken: null,
				id: null,
				username: null,
				email: null,
				portfolio: null,
		  };
};

// We create a custom hook to provide immediate usage of the login context in other components
export const useLoginContext = () => useContext(LoginContext);

// LoginProvider component that holds initial state, returns provider component
// Which pages does the user need to be logged in to gain access to??
export const LoginProvider = ({ children }) => {
	const [login, setLogin] = useState(getInitialLoginState);

	const navigate = useNavigate();

	const toastSuccess = (message, icon) =>
		toast.success(message, {
			icon: icon,
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});

	const toastError = (message) =>
		toast.error(message, {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});

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
				console.log(data);
				toastSuccess(`Welcome, ${data.user.username}!`, '👋');
				Auth.login(data.token);
				setLogin({
					loggedIn: true,
					userToken: data.token,
					id: data.user._id,
					username: data.user.username,
					email: data.user.email,
					portfolio: data.user.portfolio,
				});
				navigate('/dashboard');
			}
			if (response.status === 401) {
				const data = await response.json();
				toastError(data.message);
			}
			if (response.status === 404) {
				const data = await response.json();
				toastError(data.message);
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
				toastSuccess(
					`Welcome to ZenVest, ${data.userInfo.username}!`,
					'👋',
				);
				console.log(data);
				Auth.login(data.token);
				setLogin({
					loggedIn: true,
					userToken: data.token,
					id: data.userInfo.id,
					username: data.userInfo.username,
					email: data.userInfo.email,
					portfolio: data.user.portfolio,
				});
				navigate('/dashboard');
			}
			if (response.status === 400) {
				const data = await response.json();
				toastError(data.message);
			}
			if (response.status === 500) {
				const data = await response.json();
				toastError(data.message);
			}
		} catch (err) {
			console.error('Error during sign up:', err);
		}
	};

	const logoutUser = async () => {
		toastSuccess('Goodbye!', '✌️');
		Auth.logout(localStorage.getItem('id_token'));
		setLogin({
			loggedIn: false,
			userToken: null,
			id: null,
			username: null,
			email: null,
			portfolio: null,
		});
		navigate('/');
	};

	// Provider components expect a value prop to be passed
	return (
		<LoginContext.Provider
			value={{ login, setLogin, loginUser, logoutUser, signUpUser }}
		>
			{/* Render children passed from props */}
			{children}
			<ToastContainer className="font-bold" limit={3} />
		</LoginContext.Provider>
	);
};
