function Card(img, name, position, key) {
	return (
		<div className="flex flex-col items-center mt-5" key={key}>
			<img
				className="rounded-full mx-auto w-20 h-20 sm:w-24 sm:h-24"
				src={img}
				alt={`${img}`}
			/>
			<h1 className="whitespace-nowrap text-sm sm:text-lg mt-3 font-bold">
				{name}
			</h1>
			<span className="whitespace-nowrap text-xs sm:text-sm">
				{position}
			</span>
		</div>
	);
}

export default Card;
