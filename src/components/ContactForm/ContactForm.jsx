import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from "formik";

function ContactForm({initialValues, handleSubmit}) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            <Form className={css.form}>
                <div className={css.block}>
                    <label className={css.label__block}>
                        <span className={css.span}>Name</span>
                        <Field name = "name" type="text" className={css.input} placeholder='Input your name' />
                    </label>
                </div>

                <div className={css.block}> 
                    <label className={css.label__block}>
                        <span className={css.span}>Number</span>
                        <Field name = "number" type="phone" className={ css.input} placeholder='Input phone number' />
                    </label>
                </div>

                <button type='submit' className={css.submit}>Add Contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm;