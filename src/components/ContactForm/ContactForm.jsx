import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";

const initialValues = {
	name: "",
	number: "",
	id: "",
};

export default function ContactForm({ onAdd }) {
	const handleSubmit = (values, actions) => {
		const id = nanoid();
		values.id = id;
		onAdd(values);
		actions.resetForm();
	};

	return (
		<>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form className={css.form}>
					<Field className={css.input} name="name"></Field>
					<Field className={css.input} name="number"></Field>
					<button type="submit" className={css.btn}>
						Add contact
					</button>
				</Form>
			</Formik>
		</>
	);
}
