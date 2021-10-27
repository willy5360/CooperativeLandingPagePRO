import React from "react";
import cornelita from "../../img/PinClipart.com_wheel-clipart-black-and_130263.png";

import Jumbo from "./carousel.jsx";
import MyNavbar from "./navbar.jsx";

import Cards from "../../js/component/cards.jsx";
import image1 from "../../img/jessica-kantak-bailey--ZbSWuzMors-unsplash.jpg";
import image2 from "../../img/courtney-cook-Mp99lbxMQOU-unsplash.jpg";
import image3 from "../../img/shayna-douglas-H8qwryGP_h0-unsplash.jpg";
import image4 from "../../img/visual-stories-micheile-bYMlStcT4po-unsplash.jpg";

const Card_info = [
	{
		card_img: image1,
		card_title: "Card Title1",
		card_text:
			"Some quick example text to build on the card title and make up the bulk of the cards content."
	},

	{
		card_img: image2,
		card_title: "Card Title2",
		card_text:
			"Some quick example text to build on the card title and make up the bulk of the cards content."
	},

	{
		card_img: image3,
		card_title: "Card Title3",
		card_text:
			"Some quick example text to build on the card title and make up the bulk of the cards content."
	},

	{
		card_img: image4,
		card_title: "Card Title4",
		card_text:
			"Some quick example text to build on the card title and make up the bulk of the cards content."
	}
];

const Home = () => {
	let cardsContainer = Card_info.map((parameter, index) => {
		return (
			<Cards
				key={index.toString()}
				card_img={parameter.card_img}
				card_title={parameter.card_title}
				card_text={parameter.card_text}
			/>
		);
	});
 
	return (
		<div>
			<MyNavbar />
			<div className="jumbotron">
				<h1>
					<img className="cornelita" src={cornelita} /> Mi Cornelita
				</h1>
				<Jumbo />
				<div className="cards_Container">{cardsContainer}</div>;
			</div>
			
		</div>
	);
};

export default Home;
