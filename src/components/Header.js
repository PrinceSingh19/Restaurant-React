import React, { Component } from "react";
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavbarToggler,
	Collapse,
	Modal,
	ModalBody,
	ModalHeader,
	Button,
	FormGroup,
	Label,
	Input,
	Form,
} from "reactstrap";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false,
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		});
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	}

	handleLogin(event) {
		this.toggleModal();
		alert(
			"Username: " +
				this.username.value +
				"Password: " +
				this.password.value +
				" Remember: " +
				this.remember.checked
		);
		event.preventDefault();
	}

	render() {
		return (
			<>
				<Navbar dark color="jumbotron" expand="md">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />

						<Collapse isOpen={this.state.isNavOpen} navbar>
							<NavbarBrand href="./" className="d-none d-sm-block">
								<img
									src="assets/images/logo.png"
									height="30"
									width="41"
									alt="Ristorante Con Fusion"
								/>
							</NavbarBrand>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to="/home">
										<span className="fa fa-home fa-lg"></span>Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/aboutus">
										<span className="fa fa-info fa-lg"></span>About Us
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/menu">
										<span className="fa fa-list fa-lg"></span>Menu
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/contactus">
										<span className="fa fa-address-card fa-lg"></span>Contact Us
									</NavLink>
								</NavItem>
							</Nav>
							<Nav style={{ marginLeft: "auto" }}>
								<NavItem>
									<Button outline onClick={this.toggleModal}>
										<span className="fa fa-sign-in fa-lg">Login</span>
									</Button>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
				<div className="jumbotron">
					<div className="container">
						<div className="row row-header">
							<div className="col-12 col-sm-6 ">
								<div className="rounded-3">
									<h1>Ristorante Con Fusion</h1>
									<p>
										We take inspiration from the World's best cuisines, and create a unique fusion
										experience. Our lipsmacking creations will tickle your culinary senses!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleLogin}>
							<FormGroup>
								<Label htmlFor="username">Username</Label>
								<Input
									type="text"
									id="username"
									name="username"
									innerRef={(input) => (this.username = input)}
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="password">Password</Label>
								<Input
									type="password"
									id="password"
									name="password"
									innerRef={(input) => (this.password = input)}
								/>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input
										type="checkbox"
										name="remember"
										innerRef={(input) => (this.remember = input)}
									/>
									Remember me
								</Label>
							</FormGroup>
							<Button type="submit" value="submit" className="bg-primary">
								Login
							</Button>
						</Form>
					</ModalBody>
					{/* <ModalFooter>
						<Button color="primary" onClick={toggle}>
							Do Something
						</Button>{" "}
						<Button color="secondary" onClick={toggle}>
							Cancel
						</Button>
					</ModalFooter> */}
				</Modal>
			</>
		);
	}
}
