import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import contactsData from "../../contacts.json";
import "./App.css";

function App() {
	const [filter, setFilter] = useState("");
	const [contacts, setContacts] = useState(() => {
		const savedData = localStorage.getItem("contacts-data");
		if (savedData !== null) {
			let data = JSON.parse(savedData);
			return data;
		}
		return contactsData;
	});

	useEffect(() => {
		localStorage.setItem("contacts-data", JSON.stringify(contacts));
	}, [contacts]);

	const addUser = (values) => {
		setContacts((prevValue) => {
			return [...prevValue, values];
		});
	};

	const deleteUser = (id) => {
		setContacts((prevValue) => {
			return prevValue.filter((contact) => contact.id !== id);
		});
	};

	const searchFilter = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm onAdd={addUser} />
			<SearchBox value={filter} onFilter={setFilter} />
			<ContactList data={searchFilter} onDelete={deleteUser} />
		</>
	);
}

export default App;
