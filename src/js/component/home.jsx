import React from "react";
import cornelita from "../../img/PinClipart.com_wheel-clipart-black-and_130263.png";

import Jumbo from "./carousel.jsx";
import MyNavbar from "./navbar.jsx";

//include images into your bundle

const Home = () => {
	return (
		<div>
			<MyNavbar />
			<div className="jumbotron">
				<h1>
					<img className="cornelita" src={cornelita} /> Mi Cornelita
				</h1>
				<Jumbo />
			</div>
			
		</div>
	);
};

export default Home;
