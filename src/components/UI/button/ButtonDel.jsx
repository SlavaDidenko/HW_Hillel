import React from 'react';
import { MdDelete } from 'react-icons/md';
const ButtonDel = ({ deleteContact, id }) => {
  return (
    <button className=" flex items-center" onClick={() => deleteContact(id)}>
      Видалити
      <MdDelete className=" text-lg ml-1" />
    </button>
  );
};

export default ButtonDel;
