import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../utils/LoginContext';

const Dashboard = () => {
	const { login } = useLoginContext();

	const navigate = useNavigate();

	console.log(localUser);

	useEffect(() => {
		if (!login.loggedIn) {
			navigate('/login');
		}
	}, []);

	return (
		<section className="w-full max-w-xl p-5 sm:p-0 mx-auto text-white text-opacity-60">
			<div className="flex justify-center rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4 text-base sm:text-2xl">
				<h1 className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-blue-300 via-pink-500 from-violet-300 bg-size-200 hover:bg-right font-bold">
					My Dashboard
				</h1>
			</div>
		</section>
	);
};

export default Dashboard;
