import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Menu";
import Dishdetail from "./Dishdetail";
import { DISHES } from "../shared/dishes";

function Main() {
	const [state, setState] = useState({ selectedDish: null });
	/* function onDishSelect(dishId) {
		setState({ ...state, selectedDish: dishId });
	} */

	return (
		<div>
			<Navbar dark color="primary">
				<NavbarBrand href="./" className="mx-5">
					Ristorante De Confusion
				</NavbarBrand>
			</Navbar>
			<Menu dishes={DISHES} onClick={(dishId) => setState({ selectedDish: dishId })} />
			<Dishdetail dish={DISHES.filter((dish) => dish.id === state.selectedDish)[0]} />
		</div>
	);
}

export default Main;
