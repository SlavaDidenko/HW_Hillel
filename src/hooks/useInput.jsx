import { useState } from 'react';

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = event => {
    event ? setValue(event.target.value) : setValue('');
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default useInput;
