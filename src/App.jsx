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

  const [showContacts, setShowContacts] = useState(baseContacts);
  const [addedContacts, setAddedContacts] = useState([]);
  const [search, setSearch] = useState('');

  function handleSubmit(values, actions) {
    console.log(values);
    const newObj = {
      ...values,
      id: crypto.randomUUID(),
    };

    // Добавляем новый контакт в addedContacts и сразу обновляем showContacts
    setAddedContacts((prev) => {
      const updatedContacts = [...prev, newObj];
      setShowContacts((prevShowContacts) => [...prevShowContacts, newObj]);  // Обновляем showContacts с новым контактом
      return updatedContacts;
    });

    actions.resetForm();
  }

  function onSearch(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const allContacts = [...baseContacts, ...addedContacts];
    if (search.trim() === '') {
      setShowContacts(allContacts);
    } else {
      setShowContacts(allContacts.filter(item => item.name.toLowerCase().includes(search.toLowerCase())));
    }
  }, [search, addedContacts]);  // Добавлено addedContacts в зависимости, чтобы следить за изменениями в addedContacts

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm initialValues={initialValues} handleSubmit={handleSubmit} />
      <SearchBox onSearch={onSearch} />
      <ContactList baseContacts={showContacts} />
    </div>
  );
}

export default App;
