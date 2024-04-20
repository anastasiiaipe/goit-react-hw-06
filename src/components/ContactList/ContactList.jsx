import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

import { selectContacts } from "../redux/contactsSlice";
import { selectNameFilter } from "../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  // const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // const handleDeleteContact = (id) => {
  //   dispatch(deleteContact(id));
  // };

  return (
    <ul className={style.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={style.contactItem}>
          <Contact
            id={id}
            name={name}
            number={number}
            // onDelete={handleDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
