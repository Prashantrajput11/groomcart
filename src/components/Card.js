import React from "react";
import "./categories.css";

const Card = ({ productText, productDescription, productImage }) => {
	return (
		<div className=" h-auto  ">
			<div className="drop-shadow-sm category-card">
				<img
					src="https://res.cloudinary.com/df5hhvtdp/image/upload/v1652435608/facewash_charcoal_rxaulk.png"
					className="h-64 "
				/>
				<p className="text-yellow-500 bg-black">Facewash</p>
			</div>
		</div>
	);
};

export default Card;
