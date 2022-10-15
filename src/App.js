import React, { Component } from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/Menu";
import { DISHES } from "./shared/dishes";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
		};
	}

	render() {
		return (
			<div>
				<Navbar dark color="primary">
					<NavbarBrand href="./" className="mx-5">
						Ristorante De Confusion
					</NavbarBrand>
				</Navbar>
				<Menu dishes={this.state.dishes} />
			</div>
		);
	}
}

export default App;
