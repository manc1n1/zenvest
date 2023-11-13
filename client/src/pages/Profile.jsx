import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../utils/LoginContext';

const Profile = () => {
	const { login } = useLoginContext();

	const navigate = useNavigate();

	useEffect(() => {
		if (!login.loggedIn) {
			navigate('/login');
		}
	}, []);

	return (
		<div className="card bg-white card-rounded w-25">
			<div className="card-header bg-dark text-center">
				<h1>My Profile</h1>
			</div>
		</div>
	);
};

export default Profile;
