import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./Loading";
import { useSelector } from "react-redux";

function RenderCard({ item, isLoading, isError }) {
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
	if (isError) {
		return <h5>{isError}</h5>;
	}

	return (
		<Card>
			<CardImg src={baseUrl + item.image} alt={item.name} />
			<CardBody>
				<CardTitle>{item.name}</CardTitle>
				{item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
				<CardText>{item.description}</CardText>
			</CardBody>
		</Card>
	);
}

function Home(props) {
	const { isLoading, errMsg } = useSelector((state) => state.dishes);
	const { promoLoading, errPromo } = useSelector((state) => state.promotions);

	return (
		<div className="container">
			<div className="row ">
				<div className="col-12 col-md m-1 d-flex align-items-center">
					<RenderCard item={props.dish} isLoading={isLoading} isError={errMsg} />
				</div>
				<div className="col-12 col-md m-1 d-flex align-items-center">
					<RenderCard item={props.promotion} isLoading={promoLoading} isError={errPromo} />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard item={props.leader} />
				</div>
			</div>
		</div>
	);
}

export default Home;
