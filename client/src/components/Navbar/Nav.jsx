import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useLoginContext } from '../../utils/LoginContext';

export default function Nav() {
	const { login, logoutUser } = useLoginContext();

	const loggedOutLinks = [
		{ name: 'Login', route: '/login' },
		{ name: 'Sign Up', route: '/signup' },
	];

	const loggedInLinks = [
		{ name: 'Profile', route: '/profile' },
		{ name: 'Dashboard', route: '/dashboard' },
		{ name: 'Logout', route: '/', onClick: () => logoutUser() },
	];

	const renderLink = (content) => {
		return (
			<Link
				className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right"
				key={content.name}
				to={content.route}
				onClick={content.onClick}
			>
				{content.name}
			</Link>
		);
	};

	return (
		<header className="fixed z-50 w-full shadow-md bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
			<Navbar
				links={
					login.loggedIn
						? loggedInLinks.map((nav) => renderLink(nav))
						: loggedOutLinks.map((nav) => renderLink(nav))
				}
			/>
		</header>
	);
}
