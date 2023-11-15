import { Link } from 'react-router-dom';

function Card(name, type, id, key) {
	return (
		<div className="flex flex-col items-center mt-5" key={key}>
			<h1 className="whitespace-nowrap mb-2 text-white text-opacity-60 text-base sm:text-lg mt-3 bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-blue-300 via-pink-500 from-violet-300 bg-size-200 hover:bg-right font-bold">
				{name}
			</h1>
			<span className="whitespace-nowrap text-white text-opacity-60 text-sm sm:text-base mb-2 font-bold">
				{type}
			</span>
			<Link
				className="text-white transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right font-bold rounded-lg py-2 px-4"
				value={id}
			>
				View
			</Link>
		</div>
	);
}

export default Card;
