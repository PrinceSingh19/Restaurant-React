import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default class Header extends Component {
	render() {
		return (
			<>
				<Navbar dark color="jumbotron">
					<div className="container">
						<NavbarBrand href="./">Ristorante De Confusion</NavbarBrand>
					</div>
				</Navbar>
				<div className="jumbotron">
					<div className="container">
						<div className="row row-header">
							<div className="col-12 col-sm-6 ">
								<div className="rounded-3">
									<h1>Ristorante Con Fusion</h1>
									<p>
										We take inspiration from the World's best cuisines, and create a unique fusion
										experience. Our lipsmacking creations will tickle your culinary senses!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
