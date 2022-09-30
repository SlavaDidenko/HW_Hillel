import React from 'react';

const Button = ({ text, type, onClick }) => {
  return (
    <button
      onClick={() => (onClick ? onClick() : '')}
      type={type}
      className="p-3 bg-green-500"
    >
      {text}
    </button>
  );
};

export default Button;
