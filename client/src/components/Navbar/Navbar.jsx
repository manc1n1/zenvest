import { Link } from 'react-router-dom';
// import { useLoginContext } from '../../utils/LoginContext';

export default function Nav({ links }) {
	return (
		<nav className="container mx-auto px-6 py-3">
			<div className="sm:flex justify-between items-center font-bold">
				<Link className="text-2xl text-center" to="/">
					<h1 className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right">
						ZenVest
					</h1>
				</Link>
				<div className="flex justify-end sm:justify-between space-x-5 sm:space-x-10 text-xs sm:text-lg mt-3 sm:mt-0">
					{links.map((link) => link)}
				</div>
			</div>
		</nav>
	);
}

// function Navbar() {
// 	// useNavigation hook to redirect to logged in after signing up
// 	const { login, logoutUser } = useLoginContext();
// 	//const navigate = useNavigate();

// 	// Redirect to the login page if the user is not logged in
// 	// if (!login.loggedIn) {
// 	// 	//navigate('/login');
// 	// 	return null;
// 	// }

// 	//const loggedIn = true;

// 	// function logout() {
// 	// 	console.log('logged out successfully');
// 	// }

// 	return (
// 		<div className="container">
// 			<ul className="list-group">
// 				<li>
// 					<Link to="/">Home</Link>
// 				</li>
// 				<li>
// 					{login.loggedIn ? <Link to="profile">Profile</Link> : ''}
// 				</li>
// 				<li>
// 					{login.loggedIn ? <Link to="dashboard">My Dashboard</Link> : ''}
// 				</li>
// 				<li>
// 					{login.loggedIn ? (
// 						<button onClick={() => logoutUser()}>Logout</button>
// 					) : (
// 						<button>
// 						<Link to="login">Login</Link>
// 						</button>
// 					)}
// 				</li>
// 			</ul>
// 		</div>
// 	);
// }

// export default Navbar;
