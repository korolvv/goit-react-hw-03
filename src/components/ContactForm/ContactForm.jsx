import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useId } from "react";

const FeedbackSchema = Yup.object().shape({
	name: Yup.string()
		.matches(/^[A-Za-z\s]+$/, "Input must contain only letters")
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Name is required"),
	number: Yup.string()
		.matches(/^[\d\-()]+$/, "Input must contain only numbers")
		.required("Phone number is required"),
});

const initialValues = {
	id: "",
	name: "",
	number: "",
};

export default function ContactForm({ onAdd }) {
	const handleSubmit = (values, actions) => {
		const id = nanoid();
		values.id = id;
		onAdd(values);
		actions.resetForm();
	};

	const labelId = useId();

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={FeedbackSchema}>
				<Form className={css.form}>
					<div className={css.wrapper}>
						<label className={css.label} htmlFor={`${labelId}-name`}>
							Name
						</label>
						<Field
							type="text"
							id={`${labelId}-name`}
							className={css.input}
							name="name"></Field>
						<ErrorMessage className={css.error} name="name" component="span" />
					</div>

					<div className={css.wrapper}>
						<label className={css.label} htmlFor={`${labelId}-number`}>
							Number
						</label>
						<Field
							type="text"
							id={`${labelId}-number`}
							className={css.input}
							name="number"></Field>
						<ErrorMessage
							className={css.error}
							name="number"
							component="span"
						/>
					</div>

					<button type="submit" className={css.btn}>
						Add contact
					</button>
				</Form>
			</Formik>
		</>
	);
}
