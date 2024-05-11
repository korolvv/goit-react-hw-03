import { useState } from "react";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import data from "../../contacts.json";
import "./App.css";

function App() {
	const [contacts, setContacts] = useState(data);
	const [filter, setFilter] = useState("");

	const addUser = (values) => {
		setContacts((prevValue) => {
			return [...prevValue, values];
		});
		console.log(contacts);
	};

	const searchFilter = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm onAdd={addUser} />
			<SearchBox value={filter} onFilter={setFilter} />
			<ContactList data={searchFilter} />
		</>
	);
}

export default App;
