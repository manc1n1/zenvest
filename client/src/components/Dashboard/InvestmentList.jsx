function InvestmentList() {

    return (
        <section className="w-full max-w-xl mx-auto">
			<div className="max-w-sm bg-white bg-opacity-10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4 shadow-2xl mx-auto">
                <h1 className="block font-bold mb-2 text-white text-opacity-60 sm:text-xl mb-4" htmlFor="portfolioName">
                    Investments
                </h1>
				<div className="mb-4 text-base">
					{/* <div
						className="block font-bold mb-2 text-white text-opacity-60"
						htmlFor="portfolioType"
					>
						{InvestmentList.map((investment) => investment)}
					</div> */}
                    <div
						className="block font-bold mb-2 text-white text-opacity-60"
						htmlFor="portfolioType"
                    >Investment 1</div>
                    <div
						className="block font-bold mb-2 text-white text-opacity-60"
						htmlFor="portfolioType"
					>Investment 2</div>
					
                </div>
                <div className="flex items-center justify-between text-sm sm:text-base">
                    <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none"
                    placeholder="Investment Name"
                    name="investment"
                    id="investment"
                    type="text"
                    //value={formState.portfolioType}
                    required
                    //onChange={handleChange}
                    />
                    <br />
					<button
						className="text-white transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right font-bold rounded-lg py-2 px-4"
						type="submit">
						Add investment
					</button>
				</div>
			</div>
		</section>
    );

}

export default InvestmentList; 