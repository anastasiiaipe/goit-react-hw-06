// import { useEffect } from "react";
// import ContactList from "./components/ContactList/ContactList";

// import "./App.css";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactForm from "./components/ContactForm/ContactForm";

// function App() {
//   // const [contacts, setContacts] = useState(() => {
//   //   const storedContacts = localStorage.getItem("contacts");
//   //   return storedContacts ? JSON.parse(storedContacts) : contactsData;
//   // });
//   const [filter, setFilter] = useState("");

//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = (newContact) => {
//     setContacts([...contacts, newContact]);
//   };

//   const handleDeleteContact = (id) => {
//     setContacts(contacts.filter((contact) => contact.id !== id));
//   };

//   const handleFilterChange = (value) => {
//     setFilter(value);
//   };

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={addContact} />
//       <SearchBox value={filter} onChange={handleFilterChange} />
//       <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
//     </div>
//   );
// }

// export default App;
