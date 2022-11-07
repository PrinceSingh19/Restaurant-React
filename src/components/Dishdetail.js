import React from "react";
import {
	Card,
	CardBody,
	CardImg,
	CardText,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import SubmitComment from "./SubmitComment";

function RenderDish({ dish }) {
	return (
		<div>
			<Card>
				<CardImg src={dish.image} alt={dish.description} width="100%"></CardImg>
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}
/* const renderSubmitComment = () => {
	return (
		<>
			<SubmitComment />
		</>
	);
}; */
function RenderComments({ comments }) {
	if (comments != null) {
		return (
			<>
				<div>
					<h4>Comments</h4>
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
					<SubmitComment />
				</div>
			</>
		);
	} else {
		return <div></div>;
	}
}
const Dishdetail = (props) => {
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
