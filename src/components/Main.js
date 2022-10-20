import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Menu";
import Dishdetail from "./Dishdetail";
import { DISHES } from "../shared/dishes";

function Main() {
	const [selectedDish, setSelectedDish] = useState(null);

	return (
		<div>
			<Navbar dark color="primary">
				<NavbarBrand href="./" className="mx-5">
					Ristorante De Confusion
				</NavbarBrand>
			</Navbar>
			<Menu dishes={DISHES} onClick={(dishId) => setSelectedDish(dishId)} />
			<Dishdetail dish={DISHES.filter((dish) => dish.id === selectedDish)[0]} />
		</div>
	);
}

export default Main;
