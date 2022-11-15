import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./Loading";

import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";

function RenderMenuItem({ dish }) {
	return (
		<Card>
			<Link to={`/menu/${dish.id}`}>
				<CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
				<CardImgOverlay>
					<CardTitle>{dish.name}</CardTitle>
				</CardImgOverlay>
			</Link>
		</Card>
	);
}

const Menu = (props) => {
	const { isLoading, errMsg } = useSelector((state) => state.dishes);
	const menu = Object.values(props.dishes).map((dish) => {
		return (
			<div className="col-12 col-sm-5 col-md-5 m-1" key={dish.id}>
				<RenderMenuItem dish={dish} />
			</div>
		);
	});

	if (isLoading) {
		return (
			<>
				<div className="container">
					<div className="row text-center">
						<div>
							<Loading />
						</div>
					</div>
				</div>
			</>
		);
	}
	if (errMsg) {
		return <h5>{errMsg}</h5>;
	}
	return (
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/home">Home</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>Menu</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>Menu</h3>
					<hr />
				</div>
			</div>
			<div className="row">{menu}</div>
		</div>
	);
};

export default Menu;
