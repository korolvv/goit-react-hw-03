import Contact from "../Contact/Contact";

export default function ContactList({ data }) {
	return (
		<>
			<ul>
				{data.map((contact) => {
					return (
						<li key={contact.id}>
							<Contact contact={contact} />
						</li>
					);
				})}
			</ul>
		</>
	);
}
