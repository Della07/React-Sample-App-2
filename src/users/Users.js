import React, { Component } from "react";
import UsersTable from "./components/UsersTable";
import UsersForm from "./components/UsersForm";

class Users extends Component {
	state = {
		mode: "ADD",
		first_name: "",
		last_name: "",
		persons: []
	};

	handleChange = (key, value) => {
		console.log(key, value);
		this.setState({ [key]: value });
	};

	save = () => {
		if (this.state.mode === "ADD") {
			console.log(this.state.persons);
			let genId = 0;
			if (this.state.persons.length === 0) {
				genId = 1;
			} else {
				genId = this.state.persons[this.state.persons.length - 1].id + 1;
				console.log("genId", genId);
			}

			this.setState({
				persons: [
					...this.state.persons,
					{
						id: genId,
						first_name: this.state.first_name,
						last_name: this.state.last_name
					}
				],
				first_name: "",
				last_name: ""
			});
		} else {
			const { id, persons } = this.state;
			console.log(id);
			const index = persons.findIndex(person => person.id === id);
			console.log("index", index);
			const personsStart = persons.slice(0, index);
			console.log("start", personsStart);
			const personsEnd = persons.slice(index + 1);
			console.log("end", personsEnd);

			const updatedPersons = [
				...personsStart,
				{
					id: this.state.id,
					first_name: this.state.first_name,
					last_name: this.state.last_name
				},
				...personsEnd
			];

			console.log("update", updatedPersons);

			this.setState({
				persons: updatedPersons,
				id: "",
				first_name: "",
				last_name: "",
				mode: "ADD"
			});
		}
	};

	delete = id => {
		const { persons } = this.state;
		console.log(id);
		const index = persons.findIndex(person => person.id === id);
		console.log("index", index);

		this.setState({
			persons: this.state.persons.filter((_, person) => person !== index)
		});
	};

	edit = id => {
		const { persons } = this.state;
		console.log(id);
		const index = persons.findIndex(person => person.id === id);
		console.log("index", index);

		const edit = this.state.persons.filter((_, person) => person === index);

		this.setState({
			id: edit[0].id,
			first_name: edit[0].first_name,
			last_name: edit[0].last_name,
			mode: "EDIT"
		});
	};

	render() {
		return (
			<div>
				<UsersForm
					state={this.state}
					save={this.save}
					handleChange={this.handleChange}
				/>
				<UsersTable
					persons={this.state.persons}
					deletes={this.delete}
					edit={this.edit}
				/>
			</div>
		);
	}
}

export default Users;
