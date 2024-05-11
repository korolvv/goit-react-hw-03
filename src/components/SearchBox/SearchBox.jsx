import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
	const id = useId();

	return (
		<div className={css.wrapper}>
			<label htmlFor={id}>Find contacts by name</label>
			<input
				onChange={(e) => onFilter(e.target.value)}
				value={value}
				className={css.input}
				type="text"
				id={id}
			/>
		</div>
	);
}
