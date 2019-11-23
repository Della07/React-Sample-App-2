import React, { Component } from "react";

class UsersTable extends Component {
	render() {
		const { persons, deletes, edit } = this.props;
		return (
			<div className="container p-3">
				<table className="table table-hover">
					<thead className="thead-light">
						<tr>
							<th>ID</th>
							<th>Firstname</th>
							<th>Lastname</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{persons.map(person => (
							<tr key={person.id}>
								<td>{person.id}</td>
								<td>{person.first_name}</td>
								<td>{person.last_name}</td>
								<td>
									<button
										className="btn btn-danger"
										onClick={() => deletes(person.id)}
									>
										<i className="far fa-trash-alt"></i>
									</button>
								</td>
								<td>
									<button
										className="btn btn-primary"
										onClick={() => edit(person.id)}
									>
										<i className="far fa-edit"></i>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default UsersTable;
