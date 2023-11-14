import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../utils/LoginContext';
import { createPortfolio } from '../utils/api';

const Profile = () => {
	const { login } = useLoginContext();

	const navigate = useNavigate();

	// 	=======
	// 	const localUser = JSON.parse(localStorage.getItem('loginState'));
	// >>>>>>> master
	//   =======
	// 		<section className="w-full max-w-xl p-5 sm:p-0 mx-auto text-white text-opacity-60">
	// 			<div className="flex justify-center rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4 text-base sm:text-2xl">
	// 				<h1 className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-blue-300 via-pink-500 from-violet-300 bg-size-200 hover:bg-right font-bold">
	// 					{localUser.username}'s Profile
	// 				</h1>
	// 			</div>
	// >>>>>>> master

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
		<section className="w-full max-w-xs p-5 sm:p-0 mx-auto">
			<div className="card bg-white card-rounded w-25">
				<div className="card-header bg-dark text-center">
					<h1>{login.username}'s Profile</h1>
				</div>
			</div>

			<form onSubmit={handleFormSubmit}>
				<div className="mb-4 text-sm sm:text-base">
					<label
						className="block font-bold mb-2 text-white text-opacity-60"
						htmlFor="portfolioName"
					>
						Portfolio Name
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none"
						placeholder="New Portfolio"
						name="portfolioName"
						id="portfolioName"
						type="text"
						value={formState.portfolioName}
						required
						onChange={handleChange}
					/>
					<label
						className="block font-bold mb-2 text-white text-opacity-60"
						htmlFor="portfolioType"
					>
						Portfolio Type
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none"
						placeholder="New Portfolio Type"
						name="portfolioType"
						id="portfolioType"
						type="text"
						value={formState.portfolioType}
						required
						onChange={handleChange}
					/>
				</div>
				<button
					className="text-white transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right font-bold rounded-lg py-2 px-4"
					type="submit"
				>
					Create Portfolio
				</button>
			</form>
		</section>
	);
};

export default Profile;
