import React from 'react';

function Button(props) {
  const { onClick, disabled, children } = props;

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`text-base font-bold p-1 transition-colors duration-300 ${props.active ? 'text-[var(--secondary-color)] bg-white border-[var(--primary-color)] border-2 mx-2 rounded hover:bg-[var(--primary-color)] hover:text-white' : 'bg-[var(--primary-color)] text-white rounded px-4 hover:bg-white hover:text-[var(--secondary-color)] border-2 border-[var(--primary-color)]'}`}
    >
      {children}
    </button>
  );
}

export default Button;
