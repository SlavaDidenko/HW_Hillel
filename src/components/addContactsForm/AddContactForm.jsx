import Button from 'components/UI/button/Button';
import InputForm from 'components/UI/input/Input';
import Popup from 'components/UI/popup/Popup';
import useInput from 'hooks/useInput';
import React, { useContext } from 'react';
import { useState } from 'react';
import { ContactsContext } from '../../components/App';
const AddContactForm = () => {
  const [popup, setPopup] = useState(false);

  const name = useInput('');
  const surname = useInput('');
  const tell = useInput('');

  const contacts = useContext(ContactsContext);

  const removeValue = () => {
    name.onChange();
    surname.onChange();
    tell.onChange();
  };

  const newContact = e => {
    e.preventDefault();
    if (
      name.value.trim() !== '' &&
      surname.value.trim() !== '' &&
      tell.value.trim() !== ''
    ) {
      setPopup(false);
      const newContact = {
        name: `${name.value} ${surname.value}`,
        phone: tell.value,
        id: new Date(),
      };
      console.log(newContact.id)
      contacts.setContacts([...contacts.contacts, newContact]);
      removeValue();
    }
  };

  return (
    <>
      <Popup closePopup={setPopup} visible={popup}>
        <form onSubmit={newContact}>
          <InputForm
            value={name.value}
            onChange={name.onChange}
            placeholder="Ім'я"
          />
          <InputForm
            value={surname.value}
            onChange={surname.onChange}
            placeholder="Прізвище"
          />
          <InputForm
            value={tell.value}
            onChange={tell.onChange}
            placeholder="Телефон"
          />
          <div className=" flex justify-center items-center">
            <div className=" m-1">
              <Button type={'submit'} text={'Зберегти'} />
            </div>
            <div className=" m-1">
              <Button
                onClick={() => {
                  setPopup(false);
                  removeValue();
                }}
                type={'button'}
                text={'Скасувати'}
              />
            </div>
          </div>
        </form>
      </Popup>
      <Button onClick={() => setPopup(true)} type={'button'} text={'Додати'} />
    </>
  );
};

export default AddContactForm;
