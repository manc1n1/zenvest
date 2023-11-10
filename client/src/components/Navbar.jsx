import { Link } from 'react-router-dom';
import { useLoginContext } from '../utils/LoginContext';

function Navbar() {
	// useNavigation hook to redirect to logged in after signing up
	const { login, logoutUser } = useLoginContext();
	//const navigate = useNavigate();

	// Redirect to the login page if the user is not logged in
	// if (!login.loggedIn) {
	// 	//navigate('/login');
	// 	return null;
	// }

	//const loggedIn = true;

	// function logout() {
	// 	console.log('logged out successfully');
	// }

	return (
		<div className="container">
			<ul className="list-group">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					{login.loggedIn ? <Link to="profile">Profile</Link> : ''}
				</li>
				<li>
					{login.loggedIn ? <Link to="dashboard">My Dashboard</Link> : ''}
				</li>
				<li>
					{login.loggedIn ? (
						<button onClick={() => logoutUser()}>Logout</button>
					) : (
						<button>
						<Link to="login">Login</Link>
						</button>
					)}
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
