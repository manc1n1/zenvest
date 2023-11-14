import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useLoginContext } from '../utils/LoginContext';
import { createPortfolio } from '../utils/api';

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
			<div className="max-w-xl rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4 shadow-2xl mx-auto">
				<form onSubmit={handleFormSubmit}>
					<div className="mb-4 text-base sm:text-lg">
						<label
							className="block font-bold mb-2 text-white text-opacity-60"
							htmlFor="portfolioName"
						>
							Portfolio Name
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none"
							placeholder="Name"
							name="portfolioName"
							id="portfolioName"
							type="text"
							value={formState.portfolioName}
							required
							onChange={handleChange}
						/>
					</div>
					<div className="mb-4 text-base sm:text-lg">
						<label
							className="block font-bold mb-2 text-white text-opacity-60"
							htmlFor="portfolioType"
						>
							Portfolio Type
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none"
							placeholder="Type"
							name="portfolioType"
							id="portfolioType"
							type="text"
							value={formState.portfolioType}
							required
							onChange={handleChange}
						/>
					</div>
					<div className="flex items-center justify-between text-base sm:text-lg">
						<button
							className="text-white transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right font-bold rounded-lg py-2 px-4"
							type="submit"
						>
							Create Portfolio
						</button>
					</div>
				</form>
			</div>
			<ToastContainer className="font-bold" limit={3} />
		</section>
	);
};

export default Dashboard;
