import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

function SubmitComment() {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);
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
		<>
			<div>
				<Button color="primary" onClick={toggle}>
					Submit
				</Button>
				<Modal isOpen={modal} toggle={toggle} fade={false}>
					<ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
					<ModalBody>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="mb-3">
								<label htmlFor="rating" className="form-label">
									Rating
								</label>
								<select
									name="rating"
									className="form-select "
									aria-label="Default select example"
									{...register("rating")}
								>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</div>
							<div className="mb-3">
								<label htmlFor="name" className="form-label">
									Your Name
								</label>
								<input
									type="text"
									className="form-control"
									id="name"
									placeholder="Your Name"
									name="name"
									{...register("name", { required: true, maxLength: "15" })}
								/>
								<small className="form-text text-danger">
									{errors.name?.type === "required" && "This field is required"}
									{errors.name?.type === "maxLength" && "Maximum 15 characters are allowed"}
								</small>
							</div>
							<div className="mb-3">
								<label htmlFor="comment" className="form-label">
									Comment
								</label>
								<textarea
									type="text"
									name="comment"
									className="form-control"
									id="comment"
									aria-describedby="comment"
									rows="6"
									{...register("comment")}
								/>
							</div>

							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</ModalBody>
				</Modal>
			</div>
		</>
	);
}

export default SubmitComment;
