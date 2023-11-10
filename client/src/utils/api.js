// export const getMatchup = (matchupId) => {
// 	return fetch(`/api/matchup/${matchupId}`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	});
// };

// export const createVote = (voteData) => {
// 	return fetch(`/api/matchup/${voteData}`, {
// 		method: 'PUT',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(voteData),
// 	});
// };

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
