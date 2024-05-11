import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ data }) {
	// console.log(data);
	return (
		<>
			<ul className={css.list}>
				{data.map((contact) => {
					return (
						<li className={css.item} key={contact.id}>
							<Contact contact={contact} />
						</li>
					);
				})}
			</ul>
		</>
	);
}
