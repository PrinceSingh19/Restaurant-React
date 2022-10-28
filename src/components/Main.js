import React, { useState } from "react";
import Home from "./Home";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import Dishdetail from "./Dishdetail";
import { DISHES } from "../shared/dishes";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Contact from "./Contact";
import Aboutus from "./Aboutus";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";

function Main() {
	const [state] = useState({
		dishes: DISHES,
		comments: COMMENTS,
		promotions: PROMOTIONS,
		leaders: LEADERS,
	});

	const DishWithId = () => {
		let { dishId } = useParams();
		return (
			<Dishdetail
				dish={state.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
				comments={state.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))}
			/>
		);
	};
	return (
		<div>
			<Header />
			<Routes>
				<Route
					path="/home"
					element={
						<Home
							dish={state.dishes.filter((dish) => dish.featured)[0]}
							promotion={state.promotions.filter((promo) => promo.featured)[0]}
							leader={state.leaders.filter((leader) => leader.featured)[0]}
						/>
					}
				/>
				<Route exact path="/menu" element={<Menu dishes={state.dishes} />} />
				<Route exact path="/menu/:dishId" element={<DishWithId />} />
				<Route path="/contactus" element={<Contact />} />
				<Route path="/aboutus" element={<Aboutus leaders={state.leaders} />} />
				<Route path="/" element={<Navigate replace to="/home" />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default Main;
