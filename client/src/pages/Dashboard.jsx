import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../utils/LoginContext';

const Dashboard = () => {
	const { login } = useLoginContext();

	const navigate = useNavigate();

	useEffect(() => {
		if (!login.loggedIn) {
			navigate('/login');
		}
	}, []);

	return (
		<div>
			<div className="card bg-slate-500 card-rounded w-50"></div>
			<div>
				<div className="card-header bg-dark text-center">
					<h1 className="text-2xl text-pink-950">Welcome User!</h1>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
