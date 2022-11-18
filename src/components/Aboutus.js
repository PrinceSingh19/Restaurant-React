import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader } from "reactstrap";
import { motion } from "framer-motion";
import { Loading } from "./Loading";

const newVariants = {
	hidden: {
		opacity: 0,
		scale: 0,
		x: "1000vw",
	},
	visible: {
		scale: 1,
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		x: "-1000vw",
		opacity: 0,
		transition: {
			ease: "easeIn",
			duration: 0.5,
		},
	},
};

// rendering the leaders on aboutus page
function Aboutus(props) {
	const { leadersLoading, errLeaders } = useSelector((state) => state.leaders);

	const RenderLeader = ({ leadersDesc }) => {
		const leaderDescription = leadersDesc.map((leader, i) => {
			return (
				<motion.div
					className="container"
					key={leader.id}
					style={{ marginBottom: 20 }}
					variants={{
						visible: { opacity: 1, scale: 1, y: 0 },
						hidden: { opacity: 0, scale: 0, y: -20 },
					}}
					initial="hidden"
					animate="visible"
					transition={{ duration: 0.3, delay: 0.3 * i, type: "spring", velocity: 2 }}
					whileInView="visible"
					viewport={{ once: true }}
				>
					<div className="row">
						<div className="col-sm-2 ">
							<img src="/assets/images/alberto.png" alt="Alberto Del Rio" />
						</div>
						<div className="col-sm ">
							<div className="row">
								<h4>{leader.name}</h4>
							</div>
							<div className="row">
								<p>{leader.designation}</p>
							</div>
							<div className="row mb-2">
								<p>{leader.description}</p>
							</div>
						</div>
					</div>
				</motion.div>
			);
		});

		return leaderDescription;
	};

	return (
		<motion.div
			className="container"
			variants={newVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/home">Home</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>About Us</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>About Us</h3>
					<hr />
				</div>
			</div>
			<div className="row row-content">
				<div className="col-12 col-md-6">
					<h2>Our History</h2>
					<p>
						Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par
						excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found
						nowhere else, it enjoys patronage from the A-list clientele in Hong Kong. Featuring four
						of the best three-star Michelin chefs in the world, you never know what will arrive on
						your plate the next time you visit us.
					</p>
					<p>
						The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful
						chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's
						best cuisines in a pan.
					</p>
				</div>
				<div className="col-12 col-md-5">
					<Card>
						<CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
						<CardBody>
							<dl className="row p-1">
								<dt className="col-6">Started</dt>
								<dd className="col-6">3 Feb. 2013</dd>
								<dt className="col-6">Major Stake Holder</dt>
								<dd className="col-6">HK Fine Foods Inc.</dd>
								<dt className="col-6">Last Year's Turnover</dt>
								<dd className="col-6">$1,250,375</dd>
								<dt className="col-6">Employees</dt>
								<dd className="col-6">40</dd>
							</dl>
						</CardBody>
					</Card>
				</div>
				<div className="col-12">
					<Card>
						<CardBody className="bg-faded">
							<blockquote className="blockquote">
								<p>
									You better cut the pizza in four pieces because I'm not hungry enough to eat six.
								</p>
								<footer className="blockquote-footer">
									Yogi Berra,
									<cite title="Source Title">
										The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014
									</cite>
								</footer>
							</blockquote>
						</CardBody>
					</Card>
				</div>
			</div>
			<div className="row row-content">
				<div className="col-12">
					<h2>Corporate Leadership</h2>
				</div>
				<div className="col-12">
					<div>
						{leadersLoading ? (
							<h4 className="text-center">
								<Loading />
							</h4>
						) : errLeaders ? (
							<h4>{errLeaders}</h4>
						) : (
							<RenderLeader
								leadersDesc={props.leaders}
								loading={leadersLoading}
								error={errLeaders}
							/>
						)}
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Aboutus;
