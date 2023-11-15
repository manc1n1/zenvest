import { Link } from 'react-router-dom';

function Card(name, type, total, id, key) {
	return (
		<div className="flex flex-col items-center mt-5" key={key}>
			<Link to={`portfolio/${id}`}>
				<div className="h-20 sm:h-24 w-24 sm:w-40 text-white transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right font-bold rounded-lg p-1 text-center">
					<div className="h-full w-full bg-white bg-opacity-50 rounded-lg back">
						<h1 className="text-white text-opacity-0 text-base sm:text-2xl bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right font-bold">
							{name}
						</h1>
						<span className="text-white text-opacity-0 bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right text-sm sm:text-xl font-bold">
							{type}
						</span>
						<h1 className="text-white text-opacity-0 bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right text-sm sm:text-xl font-bold">
							{total ? `$${total}` : ''}
						</h1>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default Card;
