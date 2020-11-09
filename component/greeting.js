import React, { useState } from 'react';
import './navbar.css';

const Greeting = () => {
  const [name, setName] = useState({ name: '' });
  const [isDisabled, setDisabled] = useState(true);
  const handleChange = ({ target }) => {
    const { name: nameProp, value } = target;
    setName(prevName => ({ ...prevName, [nameProp]: value }));
    name.name.length !== 0 ? setDisabled(false) : setDisabled(true);
  };
  const handleClick = () => {
    const { name: newName } = name;
    newName.length ? alert(`Hi ${newName}`) : null;
  };
  console.log(name);
  return (
    <div>
      <input
        type="text"
        value={name.name}
        name="name"
        onChange={handleChange}
      ></input>
      <button
        onClick={handleClick}
        style={{ padding: 20, fontSize: 20, cursor: 'pointer' }}
        disabled={isDisabled}
      >
        Get Greeting
      </button>
      <p>Your name is: {name.name}</p>
    </div>
  );
};

export { Greeting };
