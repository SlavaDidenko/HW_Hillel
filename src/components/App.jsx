import React from 'react';
import Table from './table/Table';
import AddContactForm from './addContactsForm/AddContactForm';
import { useState, createContext, useEffect } from 'react';
import Contacts from './API/contacts';

export const ContactsContext = createContext();
export const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function getContacts() {
      const data = await Contacts.getContacts();
      setContacts(data);
    }
    getContacts();
  }, []);

  return (
    <main>
      <ContactsContext.Provider value={{ contacts, setContacts }}>
        <Table />
        <AddContactForm />
      </ContactsContext.Provider>
    </main>
  );
};
