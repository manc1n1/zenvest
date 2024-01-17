import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLoginContext } from '../utils/LoginContext';
import CreateInvestment from '../components/Investment/CreateInvestment';
// import InvestmentList from '../components/Dashboard/InvestmentList';
import { getPortfolioById, getInvestmentById } from '../utils/api';
import Card from '../components/Investment/Card';

import axios from 'axios';

const Portfolio = () => {
	const { login, setLogin } = useLoginContext();
	const { id } = useParams();
	const [name, setName] = useState('');
	const [type, setType] = useState('');
	const [investmentIdArr, setInvestmentIdArr] = useState([]);
	const [investmentData, setInvestmentData] = useState([]);
	const [errorOccurred, setErrorOccurred] = useState(false);
	const [total, setTotal] = useState('');

	const navigate = useNavigate();

	const nFirstLetterCap = name.charAt(0).toUpperCase();
	const nRemainingLetters = name.slice(1);
	const nCapPortfolio = nFirstLetterCap + nRemainingLetters;

	const tFirstLetterCap = type.charAt(0).toUpperCase();
	const tRemainingLetters = type.slice(1);
	const tCapPortfolio = tFirstLetterCap + tRemainingLetters;

	// if (investmentData.length > 0) {
	// 	console.log(investmentData[0].name);
	// } else {
	// 	console.log('No investment data');
	// }

	// console.log(investmentData);

	if (errorOccurred) {
		navigate('/404');
	}

	const renderCard = (investment) => {
		return Card(
			investment.name,
			investment.quantity,
			investment.price,
			investment._id,
		);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getPortfolioById(id);
				const portfolioName = data.name;
				setName(portfolioName);
				const portfolioType = data.type;
				setType(portfolioType);
				const updatedInvestmentIdArr = data.investment;

				setInvestmentIdArr(updatedInvestmentIdArr);

				const investmentDataPromises = updatedInvestmentIdArr.map(
					async (investmentId) => {
						const investment = await getInvestmentById(
							investmentId,
						);
						return investment;
					},
				);

				const updatedInvestmentData = await Promise.all(
					investmentDataPromises,
				);

				const updatedInvestmentDataWithStock = await Promise.all(
					updatedInvestmentData.map(async (investment, index) => {
						try {
							const response = await axios.get(
								`https://api.marketstack.com/v1/tickers/${investment.name}/eod?access_key=f717681de4f63efb8904ee8d5bdb7a97`,
							);
							const apiResponse = response.data;
							const price = apiResponse.data.eod[0].close;

							// Add stockData to the investment object
							const investmentWithStock = {
								...investment,
								price,
							};

							// Introduce a delay before making the next API call
							const delay = index * 2000; // Adjust the delay time as needed (in milliseconds)
							await new Promise((resolve) =>
								setTimeout(resolve, delay),
							);

							return investmentWithStock;
						} catch (error) {
							console.log(error);
							return investment; // Return the original investment if there's an error fetching stock data
						}
					}),
				);

				setInvestmentData(updatedInvestmentDataWithStock);

				let networth = 0;
				for (let i = 0; i < investmentData.length; i++) {
					const investment = investmentData[i];
					const totalInvestment =
						investment.price * investment.quantity;
					networth += totalInvestment;
				}
				setTotal(networth);
				// console.log(networth);

				if (errorOccurred) {
					navigate('/404');
				}
			} catch (error) {
				setErrorOccurred(true);
				console.error('Error fetching data:', error);
			}
		};

		if (investmentData.length > 0) {
			let networth = 0;
			for (let i = 0; i < investmentData.length; i++) {
				const investment = investmentData[i];
				const totalInvestment = investment.price * investment.quantity;
				networth += totalInvestment;
			}
			localStorage.setItem(`networth-${id}`, JSON.stringify(networth));
			setTotal(networth);
		}

		if (!login.loggedIn) {
			navigate('/login');
		}

		fetchData();
	}, [login, navigate, id, investmentData.length, errorOccurred]);

	return (
		<section className="w-full mx-auto">
			<div className="max-w-xs bg-white bg-opacity-10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4 shadow-lg text-xl sm:text-2xl mx-auto text-center">
				<h1 className="font-bold">
					{nCapPortfolio}
				</h1>
				<h1 className="text-opacity-60 text-base sm:text-lg font-bold">
					{tCapPortfolio}
				</h1>
			</div>
			<CreateInvestment />
			<div className="grid grid-cols-2 max-w-sm bg-white bg-opacity-10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg pb-8 mb-4 shadow-2xl mx-auto">
				{investmentData.map((investment) => renderCard(investment))}
			</div>
		</section>
	);
};

export default Portfolio;
