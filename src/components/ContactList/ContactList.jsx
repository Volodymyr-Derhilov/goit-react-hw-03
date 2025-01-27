import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

function ContactList({baseContacts, onDelete}) {
    return (
        <ul className={css.contactList}>
            {
                baseContacts.map((baseContact) =>
                    <li key={baseContact.id} className={css.contactList__item}>
                        <Contact baseContact={baseContact} onDelete={onDelete} />
                    </li>
                )
            }
        </ul>
    )
}

export default ContactList;