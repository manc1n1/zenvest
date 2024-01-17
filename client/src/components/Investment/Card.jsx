function Card(name, quantity, price, key) {
	return (
		<div className="flex flex-col items-center mt-5" key={key}>
			<div className="h-20 sm:h-24 w-24 sm:w-40 transition-all duration-500 bg-gradient-to-r to-yellow-500 via-blue-500 from-blue-yellow bg-size-200 hover:bg-right font-bold rounded-lg p-1 text-center">
				<div className="h-full w-full bg-white bg-opacity-50 rounded-lg back">
					<h1 className="text-base sm:text-2xl font-bold">
						{name}
					</h1>
					<span className="text-sm sm:text-xl font-bold">
						{quantity}
					</span>
					<h1 className="text-sm sm:text-xl font-bold">
						{price ? `$${price * quantity}` : ''}
					</h1>
				</div>
			</div>
		</div>
	);
}

export default Card;
