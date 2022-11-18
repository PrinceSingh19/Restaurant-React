import React from "react";
import { useSelector } from "react-redux";

import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./Loading";

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { motion } from "framer-motion";

const newVariants = {
	hidden: {
		// applying animation when the page is not shown and is hidden
		opacity: 0,
		scale: 0,
	},
	visible: {
		// applying animation when the page is shown and is visible
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.5,
			type: "tween",
			stiffness: 120,
		},
	},
	exit: {
		// applying animation when page is transitioning from one page to another is unmounted from the dom
		x: "-1000vw",
		opacity: 0,
		transition: {
			ease: "easeIn",
			duration: 0.5,
		},
	},
};
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
		<motion.div variants={newVariants} initial="hidden" animate="visible">
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

	return (
		<div className="container">
			<div className="row ">
				<div className="col-12 col-md m-1 ">
					<RenderCard item={props.dish} isLoading={isLoading} isError={errMsg} />{" "}
					{/* can pass multiple props to the child component */}
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
