import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

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

function RenderComments({ comments }) {
	if (comments != null) {
		return comments.map((comment) => {
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
		});
	} else {
		<div></div>;
	}
}
const Dishdetail = (props) => {
	if (props.dish != null) {
		return (
			<div className="container ">
				<div className="row ">
					<div className="col-12 col-sm-5 col-md-5 m-1">
						<RenderDish dish={props.dish} />
					</div>

					<div className="col-12 col-sm-5 col-md-5 m-1">
						<h4>Comments</h4>
						<RenderComments comments={props.dish.comments} />
					</div>
				</div>
			</div>
		);
	} else {
		<div></div>;
	}
};

export default Dishdetail;
