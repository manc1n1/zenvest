export const login = async (userData) => {
	try {
		const response = await fetch('/api/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return await response.json();
	} catch (error) {
		console.error('Error in login:', error);
		throw error;
	}
};

export const signUp = async (userData) => {
	try {
		const response = await fetch('/api/user/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return await response.json();
	} catch (error) {
		console.error('Error in login:', error);
		throw error;
	}
};
//
export const createInvestment = async (
	investmentName,
	investmentQuantity,
	portfolioId,
) => {
	try {
		const response = await fetch('/api/investment/create', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('id_token')}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				investmentName,
				investmentQuantity,
				portfolioId,
			}),
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const responseData = await response.json();
		// console.log('Raw Response Data:', responseData);

		return responseData;
	} catch (error) {
		console.error('Error in create investment:', error);
		throw error;
	}
};

export const getPortfolioById = async (id) => {
	try {
		const response = await fetch(`/api/portfolio/${id}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('id_token')}`,
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const portfolioData = await response.json();
		// console.log('Raw Response Data:', portfolioData);

		return portfolioData;
	} catch (error) {
		console.error('Error in getPortfolioById:', error);
		throw error;
	}
};

export const getInvestmentById = async (id) => {
	try {
		const response = await fetch(`/api/investment/${id}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('id_token')}`,
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const investmentData = await response.json();
		// console.log('Raw Response Data:', investmentData);

		return investmentData;
	} catch (error) {
		console.error('Error in getPortfolioById:', error);
		throw error;
	}
};

export const getAllInvestments = async () => {
	try {
		const response = await fetch('/api/investment/get_all', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('id_token')}`,
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const portfolioData = await response.json();
		console.log('Raw Response Data:', portfolioData);

		return portfolioData;
	} catch (error) {
		console.error('Error in create portfolio:', error);
		throw error;
	}
};

export const createPortfolio = async (portfolioName, portfolioType, userId) => {
	try {
		const response = await fetch('/api/portfolio/create', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('id_token')}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ portfolioName, portfolioType, userId }),
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return await response.json();
	} catch (error) {
		console.error('Error in create portfolio:', error);
		throw error;
	}
};

export const getPortfolio = async (portfolioId) => {
	try {
		const response = await fetch(`/api/portfolio/${portfolioId}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('id_token')}`,
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			// throw new Error('Network response was not ok');
		}
		return await response.json();
	} catch (error) {
		console.error('Error in get portfolio:', error);
		throw error;
	}
};
