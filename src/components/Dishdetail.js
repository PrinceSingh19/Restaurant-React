import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SubmitComment from "./SubmitComment";
import { Loading } from "./Loading";
import { baseUrl } from "../shared/baseUrl";

import {
	Card,
	CardBody,
	CardImg,
	CardText,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap";

function RenderDish({ dish }) {
	return (
		<div>
			<Card>
				<CardImg src={baseUrl + dish.image} alt={dish.description} width="100%"></CardImg>
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

function RenderComments({ comments }) {
	// filetering dishId of the current selected dish which I will get as props from Main component
	const dishId = comments.map((x) => x.dishId)[0];

	if (comments != null) {
		return (
			<>
				<div>
					{comments.map((comment) => {
						const options = { year: "numeric", month: "short", day: "2-digit" };
						return (
							<div key={comment.id}>
								<ul className="list-unstyled">
									<li>{comment.comment}</li>
									<li>
										--{comment.author} {new Date(comment.date).toLocaleDateString("en-us", options)}
									</li>
								</ul>
							</div>
						);
					})}
					<SubmitComment dishId={dishId} />
				</div>
			</>
		);
	} else {
		return <div></div>;
	}
}

const Dishdetail = (props) => {
	const { isLoading, errMsg } = useSelector((state) => state.dishes);

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
	if (props.dish != null) {
		return (
			<div className="container ">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/menu">Menu</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>{props.dish.name}</h3>
						<hr />
					</div>
				</div>
				<div className="row ">
					<div className="col-12 col-sm-5 col-md-5 m-1">
						<RenderDish dish={props.dish} />
					</div>

					<div className="col-12 col-sm-5 col-md-5 m-1">
						<RenderComments comments={props.comments} />
					</div>
				</div>
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default Dishdetail;
