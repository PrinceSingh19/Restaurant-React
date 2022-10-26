import React, { Component } from "react";
import Home from "./Home";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import Dishdetail from "./Dishdetail";
import { DISHES } from "../shared/dishes";
import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "./Contact";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			promotions: PROMOTIONS,
			leaders: LEADERS,
		};
	}

	render() {
		return (
			<div>
				<Header />
				<Routes>
					<Route
						path="/home"
						element={
							<Home
								dish={this.state.dishes.filter((dish) => dish.featured)[0]}
								promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
								leader={this.state.leaders.filter((leader) => leader.featured)[0]}
							/>
						}
					/>
					<Route exact path="/menu" element={<Menu dishes={this.state.dishes} />} />
					<Route exact path="/contactus" element={<Contact />} />
					<Route path="/" element={<Navigate replace to="/home" />} />
				</Routes>
				<Footer />
			</div>
		);
	}
}

export default Main;
