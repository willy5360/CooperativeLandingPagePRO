import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyNavbar = () => {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			// bg="dark"
			// variant="dark"
			id="navbar">
			<Container>
				<Row>
					<Col sm={10}>
						<Navbar.Brand href="#home">
							Start Bootstrap
						</Navbar.Brand>
					</Col>
					<Col sm={2}>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav>
								<Nav.Link href="#home">Home</Nav.Link>
								<Nav.Link href="#about">About</Nav.Link>
								<Nav.Link href="#services">Services</Nav.Link>
								<Nav.Link href="#contact">Contact</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Col>
				</Row>
			</Container>
		</Navbar>
	);
};

export default MyNavbar;
