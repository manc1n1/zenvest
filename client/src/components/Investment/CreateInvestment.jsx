import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createInvestment } from '../../utils/api';
import { useLoginContext } from '../../utils/LoginContext';

function CreateInvestment() {
	const { login, setLogin } = useLoginContext();
	const { id } = useParams();

	let investmentArr = login.investment;

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

	const toastError = (message) =>
		toast.error(message, {
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
		investmentName: '',
		investmentQuantity: '',
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
			const data = await createInvestment(
				formState.investmentName.toUpperCase(),
				formState.investmentQuantity,
				id,
			);
			toastSuccess(
				`Successfully added ${formState.investmentName}`,
				'💰',
			);
			setFormState({ investmentName: '', investmentQuantity: '' });
			const newInvestmentArr = [...investmentArr, data._id];
			setLogin({
				loggedIn: true,
				userToken: login.loggedIn,
				id: login.id,
				username: login.username,
				email: login.email,
				portfolio: login.portfolio,
				investment: newInvestmentArr,
			});
		} catch (e) {
			toastError(`Invalid investment.`);
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
						htmlFor="investmentName"
					>
						Investment Name
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none"
						placeholder="Name"
						name="investmentName"
						id="investmentName"
						type="text"
						value={formState.investmentName}
						required
						onChange={handleChange}
					/>
				</div>
				<div className="mb-4 text-base sm:text-lg">
					<label
						className="block font-bold mb-2 text-white text-opacity-60"
						htmlFor="investmentQuantity"
					>
						Investment Quantity
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none"
						placeholder="Quantity"
						name="investmentQuantity"
						id="investmentQuantity"
						type="text"
						value={formState.investmentQuantity}
						required
						onChange={handleChange}
					/>
				</div>
				<div className="flex items-center justify-between text-sm sm:text-base">
					<button
						className="text-white transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right font-bold rounded-lg py-2 px-4"
						type="submit"
					>
						Add Investment
					</button>
				</div>
			</form>
		</section>
	);
}

export default CreateInvestment;
