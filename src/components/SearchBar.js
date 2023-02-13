import React from "react";

const SearchBar = () => {
	return (
		<div>
			<input
				className="px-2 md:px-4"
				type={"text"}
				placeholder={"search for products"}
				// value={value}
				onChange={(e) => console.log(e.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
