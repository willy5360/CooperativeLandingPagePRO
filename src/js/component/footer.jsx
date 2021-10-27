import React from "react";
import Cornelita2 from "../../img/cornelita2.png";

const Footer = () => {
	return (
		<div className="FooterBody">
			<div className="FooterBodyColumn">
				<ul>
					<li>
						<a href="https://github.com/elianajr" target="_blank">
							<img src={Cornelita2} alt="" /> Elianajr
						</a>
					</li>
					<li>
						<a href="https://github.com/willy5360" target="_blank">
							<img src={Cornelita2} alt="" /> Willy
						</a>
					</li>
					<li>
						<a href="https://github.com/Anigabi">
							<img src={Cornelita2} alt="" /> Anigabi
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
