import invest from '../../assets/images/invest.svg';
import learn from '../../assets/images/learn.svg';
import organize from '../../assets/images/organize.svg';

function Pillars() {
	return (
		<section className="px-2 sm:px-8 pt-3 pb-3 mb-28">
			<div className="flex justify-between text-xl sm:text-2xl text-center">
				<div>
					<img
						className="mx-auto w-12 sm:w-20"
						src={invest}
						alt="invest"
					/>
					<h1 className="">
						INVEST
					</h1>
				</div>
				<div>
					<img
						className="mx-auto w-12 sm:w-20"
						src={learn}
						alt="learn"
					/>
					<h1 className="">
						LEARN
					</h1>
				</div>
				<div>
					<img
						className="mx-auto w-10 sm:w-16 py-2"
						src={organize}
						alt="organize"
					/>
					<h1 className="">
						ORGANIZE
					</h1>
				</div>
			</div>
		</section>
	);
}

export default Pillars;
