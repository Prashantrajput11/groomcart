import React from "react";

const Facts = () => {
	return (
		<div className="bg-gray-400 py-12 px-32 border-2 border-green-200">
			<h2 className="underline text-4xl font-body text-yellow-500">
				Grooming should never{" "}
				<span className="text-white font-bold">be boring</span>
			</h2>
			<div className="flex mt-2">
				<div>
					<p className="text-yellow-500 font-bold text-2xl">72%</p>
					<p>
						Men believe Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Facilis, praesentium.
					</p>
				</div>

				<div>
					<p className="text-yellow-500 font-bold text-2xl">81%</p>
					<p>
						Men believe Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Facilis, praesentium.
					</p>
				</div>

				<div>
					<p className="text-yellow-500 font-bold text-2xl">72%</p>
					<p>
						Men believe Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Facilis, praesentium.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Facts;
