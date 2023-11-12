import React, { useState } from 'react';
import { useLoginContext } from '../utils/LoginContext';

const SignUp = () => {
	const [formState, setFormState] = useState({
		username: '',
		email: '',
		password: '',
	});
	const { signUpUser } = useLoginContext();

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		// console.log(formState);

		try {
			const data = await signUpUser(
				formState.username,
				formState.email,
				formState.password,
			);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<section>
			<form onSubmit={handleFormSubmit}>
				<input
					placeholder="Username"
					name="username"
					type="text"
					value={formState.username}
					onChange={handleChange}
				/>
				<input
					placeholder="Email"
					name="email"
					type="email"
					value={formState.email}
					onChange={handleChange}
				/>
				<input
					placeholder="Password"
					name="password"
					type="password"
					value={formState.password}
					onChange={handleChange}
				/>
				<button className="" type="submit">
					Submit
				</button>
			</form>
		</section>
	);
};

export default SignUp;
