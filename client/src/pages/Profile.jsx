import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../utils/LoginContext';

// Uncomment import statements below after building queries and mutations
// import { useMutation, useQuery } from '@apollo/client';
// import { QUERY_TECH } from '../utils/queries';
// import { CREATE_MATCHUP } from '../utils/mutations';

const Profile = () => {
	const { login } = useLoginContext();
	const navigate = useNavigate();

	// Redirect to the login page if the user is not logged in
	if (!login.loggedIn) {
		navigate('/login');
		return null;
	}
	console.log('Dashboard loaded successfully');

	useEffect(() => {
		const getTechList = async () => {
			try {
				const res = await getAllTech();
				if (!res.ok) {
					throw new Error('No list of technologies');
				}
				const techList = await res.json();
				setTechList(techList);
			} catch (err) {
				console.error(err);
			}
		};
		getTechList();
	}, []);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const res = await createMatchup(formData);

			if (!res.ok) {
				throw new Error('something went wrong!');
			}

			const matchup = await res.json();
			console.log(matchup);
			navigate(`/matchup/${matchup._id}`);
		} catch (err) {
			console.error(err);
		}

		setFormData({
			tech1: 'JavaScript',
			tech2: 'JavaScript',
		});
	};

	return (
		<div className="card bg-white card-rounded w-25">
			<div className="card-header bg-dark text-center">
				<h1>My Profile</h1>
			</div>
			<div className="card-body m-5">
				{/* <form onSubmit={handleFormSubmit}>
					<label>Name </label>
					<select name="tech1" onChange={handleInputChange}>
						{techList.map((tech) => {
							return (
								<option key={tech._id} value={tech.name}>
									{tech.name}
								</option>
							);
						})}
					</select>
					<label>Tech 2: </label>
					<select name="tech2" onChange={handleInputChange}>
						{techList.map((tech) => {
							return (
								<option key={tech._id} value={tech.name}>
									{tech.name}
								</option>
							);
						})}
					</select>
					<button className="btn btn-danger" type="submit">
						Create Matchup!
					</button>
				</form> */}
			</div>
		</div>
	);
};

export default Profile;
