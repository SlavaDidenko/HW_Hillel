import React, {useContext} from 'react';
import Th from './th/Th';
import Td from './td/Td';
import ButtonDel from 'components/UI/button/ButtonDel';
import {ContactsContext} from '../../components/App'
const Table = () => {
  const thArr = ['Номер', "Ім'я", 'Прізвище', 'Телефон'];
  const contacts = useContext(ContactsContext);
  console.log(contacts.contacts)

  const deleteContact = id => {
    contacts.setContacts(contacts.contacts.filter(el => el.id !== id));
  };

  return (
    <div>
      <table className="table-auto text-center">
        <thead className=" bg-purple-900 text-rose-50">
          <tr>
            {thArr.map((el, index) => (
              <Th key={index} value={el} />
            ))}
          </tr>
        </thead>
        <tbody>
          {contacts.contacts.length ? (
            contacts.contacts.map((el, index) => {
              return (
                <tr key={index + 1} className="bg-purple-600 text-rose-50">
                  <Td value={index + 1} />
                  <Td value={el.name.split(' ')[0]} />
                  <Td value={el.name.split(' ')[1]} />
                  <Td value={el.phone} />
                  <Td
                    value={
                      <ButtonDel deleteContact={deleteContact} id={el.id} />
                    }
                  />
                </tr>
                // Можливо тут потрібно компонент зробити не з td а з tr
              );
            })
          ) : (
            <tr className=" m-2">
              <Td value={'Список контактів пустий'} />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
