import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useLoginContext } from '../utils/LoginContext';
import { createPortfolio } from '../utils/api';
import Portfolio from '../components/Portfolio';

const Dashboard = () => {
	const { login } = useLoginContext();

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

	const username = login.username;
	const firstLetterCap = username.charAt(0).toUpperCase();
	const remainingLetters = username.slice(1);
	const capUsername = firstLetterCap + remainingLetters;

	const [formState, setFormState] = useState({
		portfolioName: '',
		portfolioType: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormState({
			...formState,
			[name]: value,
		});
	};
	const userId = JSON.parse(localStorage.getItem('loginState'));

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			const data = await createPortfolio(
				formState.portfolioName,
				formState.portfolioType,
				userId.id,
			);
			toastSuccess(`Successfully added ${formState.portfolioName}`, '💰');
			setFormState({ portfolioName: '', portfolioType: '' });
			console.log(data);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		if (!login.loggedIn) {
			navigate('/login');
		}
	}, [login, navigate]);

	return (
		<section className="w-full p-5 sm:p-0 mx-auto">
			<div className="flex max-w-xs justify-center rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4 shadow-2xl text-xl sm:text-2xl mx-auto">
				<h1 className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-blue-300 via-pink-500 from-violet-300 bg-size-200 hover:bg-right font-bold">
					{capUsername}'s Dashboard
				</h1>
			</div>
			<Portfolio />
			<ToastContainer className="font-bold" limit={3} />
		</section>
	);
};

export default Dashboard;
