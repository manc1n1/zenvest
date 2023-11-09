import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLoginContext, LoginProvider } from '../utils/LoginContext';

function Navbar() {
	// useNavigation hook to redirect to logged in after signing up
	//const [nav, setNav] = useState(false);
	//const handleClick = () => setNav(!nav);
	//const { setLogin, login, loginUser, logoutUser } = useLoginContext();

	const loggedIn = true;

	function logout() {
		console.log('logged out successfully');
	}

	return (
		<div className="container">
			<ul className="list-group">
				<li>
					<Link to="home">Home</Link>
				</li>
				<li>
					<Link to="profile">Profile</Link>
				</li>
				<li>
					{loggedIn ? <Link to="dashboard">My Dashboard</Link> : ''}
				</li>
				<li>
					{loggedIn ? (
						<button>
							<Link to="login">Login</Link>
						</button>
					) : (
						<button onClick={() => logoutUser()}>Logout</button>
					)}
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
