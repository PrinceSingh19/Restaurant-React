import React, { Component } from "react";
import Home from "./Home";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import Dishdetail from "./Dishdetail";
import { DISHES } from "../shared/dishes";
import { Routes, Route, Navigate } from "react-router-dom";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			selectedDish: null,
		};
	}

	render() {
		return (
			<div>
				<Header />
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route exact path="/menu" element={<Menu dishes={this.state.dishes} />} />
					<Route path="/" element={<Navigate replace to="/home" />} />
				</Routes>
				<Footer />
			</div>
		);
	}
}

export default Main;
