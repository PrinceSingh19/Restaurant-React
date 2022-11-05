import React from "react";
import { Breadcrumb, BreadcrumbItem, Button, FormGroup, Label, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Contact = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};
	return (
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/home">Home</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>Contact Us</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>Menu</h3>
					<hr />
				</div>
			</div>
			<div className="row row-content">
				<div className="col-12">
					<h3>Location Information</h3>
				</div>
				<div className="col-12 col-sm-4 offset-sm-1">
					<h5>Our Address</h5>
					<address>
						121, Clear Water Bay Road
						<br />
						Clear Water Bay, Kowloon
						<br />
						HONG KONG
						<br />
						<i className="fa fa-phone"></i>: +852 1234 5678
						<br />
						<i className="fa fa-fax"></i>: +852 8765 4321
						<br />
						<i className="fa fa-envelope"></i>:{" "}
						<a href="mailto:confusion@food.net">confusion@food.net</a>
					</address>
				</div>
				<div className="col-12 col-sm-6 offset-sm-1">
					<h5>Map of our Location</h5>
				</div>
				<div className="col-12 col-sm-11 offset-sm-1">
					<div className="btn-group" role="group">
						<a role="button" className="btn btn-primary" href="tel:+85212345678">
							<i className="fa fa-phone"></i> Call
						</a>
						<a href="/" href="/" role="button" className="btn btn-info">
							<i className="fa fa-skype"></i> Skype
						</a>
						<a role="button" className="btn btn-success" href="mailto:confusion@food.net">
							<i className="fa fa-envelope-o"></i> Email
						</a>
					</div>
				</div>
			</div>
			<div className="row row-content">
				<div className="col-12">
					<h3>Send us Your Feedback</h3>
				</div>
				<div className="col-12 col-md-9">
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormGroup row>
							<label htmlFor="firstname" className="col-md-2">
								First Name
							</label>
							<div className="col-md-10">
								<input
									type="text"
									name="firstname"
									id="firstname"
									className="form-control"
									placeholder="First Name"
									autoComplete="off"
									defaultValue=""
									{...register("firstname", { required: true, minLength: "4" })}
								/>
								<small className="form-text text-danger">
									{errors.firstname?.type === "required" && "This field is required"}
									{errors.firstname?.type === "minLength" && "Min 4 character are needed"}
								</small>
							</div>
						</FormGroup>

						<FormGroup row>
							<Label htmlFor="lastname" md={2}>
								Last Name
							</Label>
							<Col md={10}>
								<input
									type="text"
									name="lastname"
									id="lastname"
									placeholder="Last Name"
									className="form-control"
									autoComplete="off"
									defaultValue=""
									{...register("lastname", { required: true, minLength: "4" })}
								/>
								<small className="form-text text-danger">
									{errors.lastname?.type === "required" && "This field is required"}
									{errors.lastname?.type === "minLength" && "Min 4 character are needed"}
								</small>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor="telnum" md={2}>
								Contact Tel.
							</Label>
							<Col md={10}>
								<input
									type="tel"
									name="telnum"
									id="telnum"
									placeholder="Tel. Number"
									className="form-control"
									autoComplete="off"
									defaultValue=""
									{...register("telnum", {
										required: true,
										pattern: /^[0-9]+$/g,
										minLength: "2",
										maxLength: "10",
									})}
								/>
								<small className="form-text text-danger">
									{errors.telnum?.type === "pattern" && "only numbers are allowed"}
									{errors.telnum?.type === "required" && "This field is required"}
									{errors.telnum?.type === "minLength" && "Min 2 numbers are needed"}
									{errors.telnum?.type === "maxLength" && "Max 10 numbers are needed"}
								</small>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor="email" md={2}>
								Email
							</Label>
							<Col md={10}>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									className="form-control"
									autoComplete="off"
									defaultValue=""
									{...register("email", {
										required: true,
										pattern: /^[(\w\d\W)+]+@+[(\w)+]+\.+[\w+]+$/g,
									})}
								/>
								<small className="form-text text-danger">
									{errors.email?.type === "required" && "This field is required"}
									{errors.email?.type === "pattern" && "Please enter valid email address"}
								</small>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col md={{ size: 6, offset: 2 }}>
								<FormGroup check>
									<Label check>
										<input
											type="checkbox"
											name="agree"
											id="agree"
											className="form-check-input"
											{...register("agree")}
										/>{" "}
										<strong> May we contact you</strong>
									</Label>
								</FormGroup>
							</Col>
							<Col md={{ size: 3, offset: 1 }}>
								<select className="form-select" name="contactType" {...register("contactType")}>
									<option>Tel.</option>
									<option>Email</option>
								</select>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor="messgae" md={2}>
								Your Feedback
							</Label>
							<Col md={10}>
								<textarea
									type="textarea"
									name="message"
									id="message"
									className="form-control"
									rows="12"
									defaultValue=""
									{...register("message")}
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col md={{ size: 10, offset: 2 }}>
								<Button type="submit" color="primary">
									Send Feedback
								</Button>
							</Col>
						</FormGroup>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
