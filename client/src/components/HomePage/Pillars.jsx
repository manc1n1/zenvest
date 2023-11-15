import invest from '../../assets/images/invest.svg';
import learn from '../../assets/images/learn.svg';
import organize from '../../assets/images/organize.svg';

function Pillars() {
	return (
		<section className="h-full w-full bg-white bg-opacity-10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-2 sm:px-8 pt-3 pb-3 mb-4 shadow-2xl">
			<div className="flex justify-between text-xl sm:text-2xl text-center font-bold">
				<div>
					<h1 className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-blue-300 via-pink-500 from-violet-300 bg-size-200 hover:bg-right">
						INVEST
					</h1>
					<img
						className="mx-auto w-12 sm:w-20"
						src={invest}
						alt="invest"
					/>
				</div>
				<div>
					<h1 className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-blue-300 via-pink-500 from-violet-300 bg-size-200 hover:bg-right">
						LEARN
					</h1>
					<img
						className="mx-auto w-12 sm:w-20"
						src={learn}
						alt="learn"
					/>
				</div>
				<div>
					<h1 className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-blue-300 via-pink-500 from-violet-300 bg-size-200 hover:bg-right">
						ORGANIZE
					</h1>
					<img
						className="mx-auto w-12 sm:w-20"
						src={organize}
						alt="organize"
					/>
				</div>
			</div>
		</section>
	);
}

export default Pillars;
