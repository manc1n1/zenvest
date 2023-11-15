import { Link } from 'react-router-dom';

function Card(name, type, id, key) {
	return (
		<div className="flex flex-col items-center mt-5" key={key}>
			<h1 className="whitespace-nowrap text-sm sm:text-lg mt-3 font-bold">
				{name}
			</h1>
			<span className="whitespace-nowrap text-xs sm:text-sm">{type}</span>
			<Link value={id}>View</Link>
		</div>
	);
}

export default Card;
