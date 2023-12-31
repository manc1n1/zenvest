function Card(name, quantity, price, key) {
	return (
		<div className="flex flex-col items-center mt-5" key={key}>
			<div className="h-20 sm:h-24 w-24 sm:w-40 text-white transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right font-bold rounded-lg p-1 text-center">
				<div className="h-full w-full bg-white bg-opacity-50 rounded-lg back">
					<h1 className="text-white text-opacity-0 text-base sm:text-2xl bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right font-bold">
						{name}
					</h1>
					<span className="text-white text-opacity-0 bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right text-sm sm:text-xl font-bold">
						{quantity}
					</span>
					<h1 className="text-white text-opacity-0 bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right text-sm sm:text-xl font-bold">
						{price ? `$${price * quantity}` : ''}
					</h1>
				</div>
			</div>
		</div>
	);
}

export default Card;
