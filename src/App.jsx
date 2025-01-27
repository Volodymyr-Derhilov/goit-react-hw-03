import { useEffect, useState } from 'react';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const baseContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const initialValues = {
    name: "",
    number: "",
  };

  const [showContacts, setShowContacts] = useState(() => {
    const saved = localStorage.getItem('contacts');
    return JSON.parse(saved).length > 0 ? JSON.parse(saved) : baseContacts;
  });

  const [search, setSearch] = useState('');

  function handleSubmit(values, actions) {
    const newObj = {
      ...values,
      id: crypto.randomUUID(),
    };
    
    setShowContacts((prev) => {
      const updatedContacts = [...prev, newObj];
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return updatedContacts;
    })

    actions.resetForm();
  }

  function onDelete(id) {
    setShowContacts((prev => {
      const updatedContacts = prev.filter(item => item.id !== id);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return updatedContacts;
    }));
  }

  function onSearch(e) {
    setSearch(e.target.value);
  }

  const filteredContacts = showContacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase())); 

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm initialValues={initialValues} handleSubmit={handleSubmit} />
      <SearchBox onSearch={onSearch} />
      <ContactList baseContacts={filteredContacts} onDelete={ onDelete} />
    </div>
  );
}

export default App;
