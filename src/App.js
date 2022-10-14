import React from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/Menu";

function App() {
	return (
		<>
			<Navbar dark color="primary">
				<NavbarBrand href="./" className="mx-5">
					Ristorante De Confusion
				</NavbarBrand>
			</Navbar>
			<Menu />
		</>
	);
}

export default App;
