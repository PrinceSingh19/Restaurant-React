import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Menu";
import Dishdetail from "./Dishdetail";
import { DISHES } from "../shared/dishes";

function Main() {
	const [dishes] = useState({ DISHES });
	const [selectedDish, updatedDish] = useState(null);

	function onDishSelect(dishId) {
		return updatedDish((selectedDish) => ({
			...selectedDish,
			selectedDish: dishId,
		}));
	}

	return (
		<div>
			<Navbar dark color="primary">
				<NavbarBrand href="./" className="mx-5">
					Ristorante De Confusion
				</NavbarBrand>
			</Navbar>
			<Menu dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} />
			<Dishdetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />
		</div>
	);
}

export default Main;
