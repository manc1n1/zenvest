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
	};
}

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
	};
}

export const createInvestment = async (investmentData, token) => {
	try {
		const response = await fetch('/api/investment/create', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(investmentData),
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return await response.json();
	} catch (error) {
		console.error('Error in create investment:', error);
		throw error;
	};
}
export const createPortfolio = async (portfolioName, portfolioType, token ) => {
	const id_token = localStorage.getItem("id_token");
	try {
		const response = await fetch("/api/portfolio/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({ portfolioName, portfolioType }),
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return await response.json();
	} catch (error) {
		console.error('Error in create portfolio:', error);
		throw error;
	};
};