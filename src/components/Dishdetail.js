import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

export default class Dishdetail extends Component {
	renderDish(dish) {
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

	renderComments(comments) {
		if (comments != null) {
			return comments.map((comment) => {
				const options = { year: "numeric", month: "short", day: "numeric" };
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
	render() {
		if (this.props.dish != null) {
			return (
				<div className="container ">
					<div className="row ">
						<div className="col-12 col-sm-5 col-md-5 m-1" style={{ paddingLeft: 0 }}>
							{this.renderDish(this.props.dish)}
						</div>

						<div className="col-12 col-sm-5 col-md-5 m-1">
							<h4>Comments</h4>
							{this.renderComments(this.props.dish.comments)}
						</div>
					</div>
				</div>
			);
		} else {
			<div></div>;
		}
	}
}
