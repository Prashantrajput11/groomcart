import React from "react";

const Banner = () => {
	return (
		<div className="bg-zinc-800 h-auto py-6 ">
			<div className="bg-black md:flex md:justify-between    px-4 py-4 items-center md:mx-6 md:px-6">
				<div className="">
					<h2 className="text-yellow-500   text-6xl mb-3 font-body">
						Style yourself now
					</h2>
					<h3 className="text-yellow-500 mb-3 font-body  text-lg md:text-2xl">
						Get groomed woth the best products
					</h3>
					<button className="text-white bg-yellow-500 px-2 py-1 hover:bg-yellow-600 transition: all font-body">
						Show Now
					</button>
				</div>

				<div>
					<img
						src="https://res.cloudinary.com/df5hhvtdp/image/upload/v1652210451/FACEWASH_1_xqmwnl.png"
						alt="facewash"
						className="h-30 md:h-96"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
