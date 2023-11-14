import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../utils/LoginContext';

const Profile = () => {
	const { login } = useLoginContext();

	const navigate = useNavigate();

	const username = login.username;
	const firstLetterCap = username.charAt(0).toUpperCase();
	const remainingLetters = username.slice(1);
	const capUsername = firstLetterCap + remainingLetters;

	useEffect(() => {
		if (!login.loggedIn) {
			navigate('/login');
		}
	}, [login, navigate]);

	return (
		<section className="w-full max-w-xs p-5 sm:p-0 mx-auto">
			<div className="flex max-w-xs justify-center rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4 shadow-2xl text-xl sm:text-2xl mx-auto">
				<h1 className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-blue-300 via-pink-500 from-violet-300 bg-size-200 hover:bg-right font-bold">
					{capUsername}'s Profile
				</h1>
			</div>
		</section>
	);
};

export default Profile;
