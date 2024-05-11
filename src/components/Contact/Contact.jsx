import { FaUserLarge } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
export default function Contact({ contact }) {
	return (
		<>
			<div>
				<p className={css.p}>
					{<FaUserLarge className={css.icon} />}
					{contact.name}
				</p>
				<p className={css.p}>
					{<FaPhone className={css.icon} />}
					{contact.number}
				</p>
			</div>
			<button className={css.btn} type="button">
				Delete
			</button>
		</>
	);
}
