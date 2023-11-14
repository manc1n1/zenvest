import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useLoginContext } from '../../utils/LoginContext';

export default function Nav() {
	const { login, logoutUser } = useLoginContext();

	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

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

	const handleScroll = () => {
		const currentScrollPos = window.scrollY;

		if (currentScrollPos > prevScrollPos) {
			setVisible(false);
		} else {
			setVisible(true);
		}

		setPrevScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	});

	return (
		<header
			className={`z-50 sticky w-full shadow-md bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg ${
				visible ? 'top-0' : ''
			}`}
		>
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
