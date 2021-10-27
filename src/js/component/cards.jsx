import React from "react";

//include images into your bundle
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const Cards = props => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={props.card_img} />
			<Card.Body>
				<Card.Title>{props.card_title}</Card.Title>
				<Card.Text>{props.card_text}</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};

{
	Cards.propTypes = {
		card_img: PropTypes.string,
		card_title: PropTypes.string,
		card_text: PropTypes.string
	};
}

export default Cards;
