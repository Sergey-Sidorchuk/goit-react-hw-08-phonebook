import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors";
import { addContact } from '../../redux/operation';
import styles from './Form.module.css';

export default function Form () {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    

    const handleChange = event => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    };

    const hadleSubmit = event => {
        event.preventDefault();

        if (!name || !number) {
            return;
        }

        if (contacts.map(contact => contact.name).includes(name)) {
            alert(`${name} is already in contacs.`)
        }

        dispatch(addContact({ name, number }));
        setName('');
        setNumber('');
    };
    
        return (
            <form className={styles.form} onSubmit={hadleSubmit}>
                <label className={styles.label}>
                Name
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={name}
                    onChange={handleChange}
                />
                </label>

                <label className={styles.label}>
                Number
                <input
                    className={styles.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                    onChange={handleChange}
                />
                </label>

                <button className={styles.btn} type="submit">Add contact</button>
            </form>
        )
    }