import { FaUserLarge } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
export default function Contact({ contact }) {
	return (
		<div>
			<p>
				{<FaUserLarge />}
				{contact.name}
			</p>
			<p>
				{<FaPhone />}
				{contact.number}
			</p>
			<button type="button">Delete</button>
		</div>
	);
}
