import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { getDishes } from "../redux/stateSlices/dishesSlice";
import { Loading } from "./Loading";
function RenderCard({ item, isLoading, errMsg }) {
	if (isLoading) {
		return (
			<>
				<div className="container">
					<div className="row">
						<Loading />
					</div>
				</div>
			</>
		);
	} else if (errMsg) {
		return <h4>{errMsg}</h4>;
	}
	return (
		<Card>
			<CardImg src={item.image} alt={item.name} />
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
	const dispatch = useDispatch();
	useEffect(() => {
		setTimeout(() => {
			dispatch(getDishes());
		}, 2000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="container">
			<div className="row align-items-start">
				<div className="col-12 col-md m-1">
					<RenderCard item={props.dish} isLoading={isLoading} errMsg={errMsg} />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard item={props.promotion} />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard item={props.leader} />
				</div>
			</div>
		</div>
	);
}

export default Home;
