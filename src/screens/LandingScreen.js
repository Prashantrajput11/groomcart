import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import { categories } from "../config/config";
import Card from "../components/Card";
import Facts from "../components/Facts";
const LandingScreen = () => {
	return (
		<div>
			<Header />
			<Banner />

			{/* categories */}
			<div className="flex justify-around py-6">
				{categories.map((category) => (
					<Card {...category} />
				))}
			</div>

			{/* facts */}

			<Facts />
		</div>
	);
};

export default LandingScreen;
