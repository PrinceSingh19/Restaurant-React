import React from "react";
import { useSelector } from "react-redux";

import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./Loading";

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { motion } from "framer-motion";

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
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			//transition={{ duration: 1 }}
			//animate={{ opacity: 0 }}
			transition={{ fadeIn: [0.17, 0.67, 0.83, 0.67], duration: 1 }}
			variants={{
				visible: {
					opacity: [0.17, 0.67, 0.83, 1],
					scale: 1,
				},
				hidden: { opacity: 0, scale: 0 },
			}}
		>
			<Card>
				<CardImg src={baseUrl + item.image} alt={item.name} />
				<CardBody>
					<CardTitle>{item.name}</CardTitle>
					{item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
					<CardText>{item.description}</CardText>
				</CardBody>
			</Card>
		</motion.div>
	);
}

function Home(props) {
	const { isLoading, errMsg } = useSelector((state) => state.dishes);
	const { promoLoading, errPromo } = useSelector((state) => state.promotions);
	const { leadersLoading, errLeaders } = useSelector((state) => state.leaders);

	/* if (isLoading || promoLoading || leadersLoading) {
		return (
			<>
				<div className="container">
					<div className="row">
						<div>
							<Loading />
						</div>
					</div>
				</div>
			</>
		);
	}
	if (errMsg || errLeaders || errPromo) {
		return <h5>{errMsg}</h5>;
	} */

	return (
		<div className="container">
			<div className="row ">
				<div className="col-12 col-md m-1 ">
					<RenderCard item={props.dish} isLoading={isLoading} isError={errMsg} />
				</div>
				<div className="col-12 col-md m-1 ">
					<RenderCard item={props.promotion} isLoading={promoLoading} isError={errPromo} />
				</div>
				<div className="col-12 col-md m-1 ">
					<RenderCard item={props.leader} isLoading={leadersLoading} isError={errLeaders} />
				</div>
			</div>
		</div>
	);
}

export default Home;
