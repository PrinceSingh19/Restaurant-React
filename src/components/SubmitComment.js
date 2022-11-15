import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { addComment, postComments } from "../redux/stateSlices/commentsSlice";

function SubmitComment(props) {
	const [modal, setModal] = useState(false);
	const dispatch = useDispatch();
	const dishId = props.dishId;
	const toggle = () => setModal(!modal);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = async (data) => {
		const { comment, author, rating } = data;
		// Sending input data in form to the server
		try {
			await dispatch(postComments({ dishId, comment, author, rating })).unwrap();
		} catch (err) {
			return err.message;
		}
		/* displaying comments after the input data is send to server after which retreiving data from server 
		 in commentSlice using addComment and diplaying the updated comments
		Here I purposely did not dispatched addComment after postComments by chaining b/c addComment was getting
		 executed first and then postComments due to async function */
		dispatch(addComment());
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
								<label htmlFor="author" className="form-label">
									Your Name
								</label>
								<input
									type="text"
									className="form-control"
									id="name"
									placeholder="Your Name"
									name="author"
									{...register("author", { required: true, maxLength: "15" })}
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
