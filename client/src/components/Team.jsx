import person1 from '../assets/images/person1.svg';
import person2 from '../assets/images/person2.svg';

function Team() {
	return (
		<section className="h-full w-full rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4 shadow-2xl">
			<div className="flex justify-center text-lg sm:text-2xl mb-4">
				<h1 className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-blue-300 via-pink-500 from-violet-300 bg-size-200 hover:bg-right font-bold">
					MEET OUR TEAM
				</h1>
			</div>
			<div className="grid grid-cols-2 text-base sm:text-xl text-center gap-4">
				<div>
					<h1 className="whitespace-nowrap">Mary Holland Nader</h1>
					<img
						className="mx-auto w-12 sm:w-20"
						src={person1}
						alt=""
					/>
				</div>
				<div>
					<h1 className="whitespace-nowrap">Naomi Lapaglia</h1>
					<img
						className="mx-auto w-12 sm:w-20"
						src={person2}
						alt=""
					/>
				</div>
				<div>
					<h1 className="whitespace-nowrap">Donnie Azoff</h1>
					<img
						className="mx-auto w-12 sm:w-20"
						src={person1}
						alt=""
					/>
				</div>
				<div>
					<h1 className="whitespace-nowrap">Teresa Petrillo</h1>
					<img
						className="mx-auto w-12 sm:w-20"
						src={person2}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
}

export default Team;
