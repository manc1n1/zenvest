import Card from './TeamCard/Card';
import mary from '../assets/images/mary.jpeg';
import jamie from '../assets/images/jamie.jpeg';
import simon from '../assets/images/simon.jpeg';
import breaux from '../assets/images/breaux.jpeg';

function Team() {
	const team = [
		{
			img: mary,
			name: 'Mary Holland Nader',
			position: 'CEO / Founder',
			description:
				"Mary is a financier, influencer, and the Founder and CEO of ZenVest. She holds a Bachelor's degree with a double major in Finance and International Business from the University of Georgia. She is also currently a Wealth Management Analyst at Deutche Bank in New York City.",
		},
		{
			img: jamie,
			name: 'Jamie Haire',
			position: 'COO',
			description:
				'Jamie is the COO of BRAVE Family Advisors, an investment management firm based in Summit, New Jersey. He graduated from Middlebury College with a Bachelor of Arts in History. He has a background in trading across multiple asset classes most recently at Millennium.',
		},
		{
			img: simon,
			name: 'Simon Brady',
			position: 'Consultant',
			description:
				'Simon is a New York City based certified financial planner originally from the UK. In 2016 he founded Anglia Advisors, a personal finance and investment consultant firm. Prior to Anglia, he was a Senior Management Executive and Derivatives Broker at Tradition in London and New York. He holds a European Advanced Degree in Management Studies from NEOMA Business School and a CFP Certificate from NYU School of Professional Studies.',
		},
		{
			img: breaux,
			name: 'Breaux Nader',
			position: 'Senior Financial Advisor',
			description:
				'Breaux is a Senior Financial Advisor at Wells Fargo Advisors in Baton Rouge, Louisiana. He is a Baton Rouge native and a 1995 graduate of Louisiana Tech University. Breaux has been a CERTIFIED FINANCIAL PLANNER® practitioner since 2006. Breaux was recognized by Forbes as a 2018, 2019, 2021, 2022 and 2023 Best-in-State Wealth Advisor in the state of Louisiana.',
		},
	];

	const renderCard = (team) => {
		return Card(team.img, team.name, team.position, team.name);
	};

	return (
		<section className="h-full w-full bg-white bg-opacity-10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4 shadow-2xl">
			<div className="flex justify-center text-xl sm:text-2xl mb-4">
				<h1 className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-blue-300 via-pink-500 from-violet-300 bg-size-200 hover:bg-right font-bold sm:text-2xl">
					MEET OUR TEAM
				</h1>
			</div>
			<div className="grid grid-cols-2 gap-4">
				{team.map((mem) => renderCard(mem))}
			</div>
		</section>
	);
}

export default Team;
