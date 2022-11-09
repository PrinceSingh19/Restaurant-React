import React, { useEffect } from "react";
import Home from "./Home";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import Dishdetail from "./Dishdetail";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Contact from "./Contact";
import Aboutus from "./Aboutus";
import { useDispatch, useSelector } from "react-redux";
import { getDishes } from "../redux/stateSlices/dishesSlice";
import { Loading } from "./Loading";

function Main() {
	const { dishes, isLoading } = useSelector((state) => state.dishes);
	const { leaders } = useSelector((state) => state.leaders);
	const { promotions } = useSelector((state) => state.promotions);
	const { comments } = useSelector((state) => state.comments);
	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(() => {
			dispatch(getDishes());
		}, 2000);
		//eslint-disable-next-line
	}, []);
	const DishWithId = () => {
		let { dishId } = useParams();
		return (
			<Dishdetail
				dish={dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
				comments={comments.filter((comment) => comment.dishId === parseInt(dishId, 10))}
			/>
		);
	};
	if (isLoading) {
		return <Loading />;
	}
	return (
		<div>
			<Header />
			<Routes>
				<Route
					path="/home"
					element={
						<Home
							dish={dishes.filter((dish) => dish.featured)[0]}
							promotion={promotions.filter((promo) => promo.featured)[0]}
							leader={leaders.filter((leader) => leader.featured)[0]}
						/>
					}
				/>
				<Route exact path="/menu" element={<Menu dishes={dishes} />} />
				<Route exact path="/menu/:dishId" element={<DishWithId />} />
				<Route path="/contactus" element={<Contact />} />
				<Route path="/aboutus" element={<Aboutus leaders={leaders} />} />
				<Route path="/" element={<Navigate replace to="/home" />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default Main;
