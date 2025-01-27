import css from './Contact.module.css';
import { IoIosContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function Contact({ baseContact, onDelete }) {
    return (
        <>
            <div className={css.info}>
                <ul className={css.list}>
                    <li className={css.item}>
                        <IoIosContact className={css.icon} />
                        <p className={css.name}>{baseContact.name}</p>
                    </li>  
                    <li className={css.item}>
                        <FaPhoneAlt className={css.icon} />
                        <p className={css.name}>{ baseContact.number}</p>
                    </li>
                </ul>
                <button type='button' className={css.buttonDelete} onClick={() => onDelete(baseContact.id)}>Delete</button>
            </div>
        </>
    )
    
    
}

export default Contact;