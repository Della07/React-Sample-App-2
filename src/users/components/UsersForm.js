import React, { Component } from "react";

class UsersForm extends Component {
	render() {
		const { save, state, handleChange } = this.props;
		return (
			<div className="container-fluid">
				<div className="container-fluid text-center bg-dark text-white p-4">
					<h1>React Sample App</h1>
				</div>
				<div className="container">
					<div className="row p-3">
						<div className="col-12 col-sm-5 p-2 p-sm-1">
							<input
								className="form-control"
								placeholder="First name"
								onChange={e => handleChange("first_name", e.target.value)}
								value={state.first_name}
								type="text"
								name="fname"
							/>
						</div>
						<div className="col-12 col-sm-5 p-2 p-sm-1">
							<input
								type="text"
								className="form-control"
								placeholder="Last name"
								onChange={e => handleChange("last_name", e.target.value)}
								value={state.last_name}
								name="lname"
							/>
						</div>
						<div className="col-1 p-2 p-sm-1">
							<button className="btn btn-success" onClick={() => save()}>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default UsersForm;
