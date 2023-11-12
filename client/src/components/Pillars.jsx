import invest from '../assets/images/invest.svg';
import learn from '../assets/images/learn.svg';
import organize from '../assets/images/organize.svg';

function Pillars() {
	return (
		<section className="h-full w-full rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4">
			<div className="flex justify-between text-sm sm:text-2xl text-center">
				<div>
					<h1>INVEST</h1>
					<img
						className="mx-auto w-12 sm:w-20"
						src={invest}
						alt="invest"
					/>
				</div>
				<div>
					<h1>LEARN</h1>
					<img
						className="mx-auto w-12 sm:w-20"
						src={learn}
						alt="learn"
					/>
				</div>
				<div>
					<h1>ORGANIZE</h1>
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
