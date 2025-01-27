import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"

function ContactForm({ initialValues, handleSubmit }) {
    const feedbackScheme = Yup.object().shape(
        {
            name: Yup.string().min(2, "Min 3 symbols").max(50, "Not more than 50 symbols").required("Required"),
            number: Yup.string().matches(/^\+?[1-9]\d{1,4}([- ]?\d{1,4}){1,3}$/, "Invalid phone number").min(2, "Min 3 symbols").max(50, "Not more than 50 symbols").required("Required"),
        }
    );

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={feedbackScheme}
        >
            <Form className={css.form}>
                <div className={css.block}>
                    <label className={css.label__block}>
                        <span className={css.span}>Name</span>
                        <Field name = "name" type="text" className={css.input} placeholder='Input your name' />
                    </label>

                    <ErrorMessage name='name' component="span" className={css.error} />
                </div>

                <div className={css.block}> 
                    <label className={css.label__block}>
                        <span className={css.span}>Number</span>
                        <Field name = "number" type="phone" className={ css.input} placeholder='Input phone number' />
                    </label>

                    <ErrorMessage name='number' component="span" className={css.error} />
                </div>

                <button type='submit' className={css.submit}>Add Contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm;