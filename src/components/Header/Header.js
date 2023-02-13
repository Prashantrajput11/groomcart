import React from "react";
import NavLinks from "../NavLinks";
import SearchBar from "../SearchBar";

const Header = () => {
	return (
		<div className="bg-black px-4 py-2 flex-none justify-around md:flex">
			<h2 className="text-white font-bold text-2xl">
				Groom
				<span className="font-medium text-yellow-500 font-serif font-body">
					Cart
				</span>
			</h2>
			{/* <NavLinks /> */}
			<SearchBar />
		</div>
	);
};

export default Header;
