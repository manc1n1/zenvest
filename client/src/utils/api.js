export const login = (userData) => {
	return fetch('/api/user/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData),
	});
};

export const signUp = (userData) => {
	return fetch('/api/user/signup', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData),
	});
};

export const createInvestment = (investmentData, token) => {
	return fetch('/api/investment/create', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(investmentData),
	});
};
