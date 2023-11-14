import mary from '../assets/images/mary.jpeg';
import jamie from '../assets/images/jamie.jpeg';
import simon from '../assets/images/simon.jpeg';
import breaux from '../assets/images/breaux.jpeg';

function Team() {
	return (
		// <section className="h-full w-full rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4 shadow-2xl">
		// 	<div className="flex justify-center text-xl sm:text-2xl mb-4">
		<section>
			<div className="flex justify-center mb-4 mt-6">
				<h1 className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-blue-300 via-pink-500 from-violet-300 bg-size-200 hover:bg-right font-bold sm:text-2xl">
					MEET OUR TEAM
				</h1>
			</div>
			{/* <div className="grid grid-cols-2 text-lg sm:text-xl text-center gap-4">
				<div>
					<h1 className="whitespace-nowrap">Jordan Belfort</h1> */}
			<div className="grid grid-cols-2 text-base sm:text-xl text-center gap-4">
				<div className="h-full w-full rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4 shadow-2xl bg-white bg-opacity-10">
					<h1 className="whitespace-nowrap text-xl">Mary Holland Nader</h1>
					<img
						className="mx-auto w-12 sm:w-20"
						src={mary}
						alt="Mary Holland Nader"
					/>
					<p className='text-sm mt-4'>Mary is a financier, influencer, and the Founder and CEO of ZenVest. She holds a Bachelor's degree with a double major in Finance and International Business from the University of Georgia. She is also currently a Wealth Management Analyst at Deutche Bank in New York City.</p>
				</div>
				<div className="h-full w-full rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4 shadow-2xl bg-white bg-opacity-10">
					<h1 className="whitespace-nowrap text-xl">Jamie Haire</h1>
					<img
						className="mx-auto w-12 sm:w-20"
						src={jamie}
						alt=""
					/>
					<p className='text-sm mt-4'> Jamie is the COO of BRAVE Family Advisors, an investment management firm based in Summit, New Jersey. He graduated from Middlebury College with a Bachelor of Arts in History. He has a background in trading across multiple asset classes most recently at Millennium.</p>
				</div>
				<div className="h-full w-full rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4 shadow-2xl bg-white bg-opacity-10">
					<h1 className="whitespace-nowrap text-xl">Simon Brady</h1>
					<img
						className="mx-auto w-12 sm:w-20"
						src={simon}
						alt=""
					/>
					<p className='text-sm mt-4'> Simon is a New York City based certified financial planner originally from the UK. In 2016 he founded Anglia Advisors, a personal finance and investment consultant firm. Prior to Anglia, he was a Senior Management Executive and Derivatives Broker at Tradition in London and New York. He holds a European Advanced Degree in Management Studies from NEOMA Business School and a CFP Certificate from NYU School of Professional Studies.</p>
				</div>
				<div className="h-full w-full rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4 shadow-2xl bg-white bg-opacity-10">
					<h1 className="whitespace-nowrap text-xl">Breaux Nader</h1>
					<img
						className="mx-auto w-12 sm:w-20"
						src={breaux}
						alt=""
					/>
					<p className='text-sm mt-4'>Breaux is a Senior Financial Advisor at Wells Fargo Advisors in Baton Rouge, Louisiana. He is a Baton Rouge native and a 1995 graduate of Louisiana Tech University. Breaux has been a CERTIFIED FINANCIAL PLANNER® practitioner since 2006. Breaux was recognized by Forbes as a 2018, 2019, 2021, 2022 and 2023 Best-in-State Wealth Advisor in the state of Louisiana.</p>
				</div>
			</div>
		</section>
	);
}

export default Team;
