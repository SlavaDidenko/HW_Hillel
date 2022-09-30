import React from 'react';

const InputForm = ({ value, placeholder, onChange }) => {
  return (
    <div className="input-wrapper mb-2">
      <input
        onChange={onChange}
        className=" p-2 w-96"
        value={value}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputForm;
