import { useState } from 'react';
import { toast } from 'react-toastify';
import { createPortfolio } from '../../utils/api';
import { useLoginContext } from '../../utils/LoginContext';

function CreatePortfolio() {
	const { login, setLogin } = useLoginContext();

	let portfolioArr = login.portfolio;

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

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			const data = await createPortfolio(
				formState.portfolioName,
				formState.portfolioType,
				login.id,
			);
			toastSuccess(`Successfully added ${formState.portfolioName}`, '💰');
			setFormState({ portfolioName: '', portfolioType: '' });
			const newPortfolioArr = [...portfolioArr, data._id];
			setLogin({
				loggedIn: true,
				userToken: login.loggedIn,
				id: login.id,
				username: login.username,
				email: login.email,
				portfolio: newPortfolioArr,
			});
		} catch (e) {
			console.error(e);
		}
	};
	return (
		<section className="w-full max-w-xl mx-auto">
			<form
				className="max-w-sm bg-white bg-opacity-10 rounded-lg bg-clip-padding
				backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4 shadow-2xl mx-auto"
				onSubmit={handleFormSubmit}
			>
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
				<div className="flex items-center justify-between text-sm sm:text-base">
					<button
						className="text-white transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right font-bold rounded-lg py-2 px-4"
						type="submit"
					>
						Create Portfolio
					</button>
				</div>
			</form>
		</section>
	);
}

export default CreatePortfolio;
