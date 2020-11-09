import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { Expensive } from './expensiveComputation';
import { Time } from './time';

const useTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalID = setInterval(() =>
      setTime(new Date().toLocaleTimeString(), 1000)
    );
    return () => {
      clearInterval(intervalID);
    };
  });
  return time;
};

const btnStyle = {
  dislay: 'block',
  width: 150,
  padding: 15,
  fontSize: 40,
  cursor: 'pointer',
};

const DisplayTime = () => {
  const currentTime = useTime();
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    console.log('called');
    count ? setIsDisabled(false) : setIsDisabled(true);
  }, [count]);
  return (
    <div>
      <h1>Current time: {currentTime}</h1>
      <hr></hr>
      <h1>Current Count: {count}</h1>
      <button onClick={() => setCount(count + 1)} style={btnStyle}>
        +
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={btnStyle}
        disabled={isDisabled}
      >
        -
      </button>
      <hr></hr>
    </div>
  );
};

const shopping = [
  { itemName: 'shoes', qty: 1, price: 150, tax: false, taxPer: 0.08 },
  { itemName: 'shirts', qty: 5, price: 40, tax: true, taxPer: 0.08 },
  { itemName: 'pants', qty: 2, price: 60, tax: false, taxPer: 0.08 },
];

const Profile = () => {
  const [profile, setProfile] = useState({ name: '', age: '' });

  const handleChange = ({ target }) => {
    const value = target.value;
    const name = target.name;
    name.startsWith('n')
      ? localStorage.setItem('name', value)
      : localStorage.setItem('age', value);
    setProfile(prevProfile => ({ ...prevProfile, [name]: value }));
  };
  console.log(typeof +profile.age);
  console.log(+profile.age);

  return (
    <div>
      <main>
        <h1>Profile</h1>
        <p>
          {profile.name.length
            ? `Name is: ${profile.name}`
            : 'no name entered yet'}
        </p>
        <p>
          {profile.age && +profile.age
            ? `Age is: ${profile.age}`
            : String(profile.age).length
            ? 'NaN: Enter a number'
            : 'No age entered'}
        </p>
      </main>
      <input
        type="text"
        value={profile.name}
        onChange={handleChange}
        name="name"
      ></input>
      <input
        type="text"
        value={profile.age}
        name="age"
        onChange={handleChange}
      ></input>
      <hr></hr>
      <Button initialCount={0} style={btnStyle} />
      <hr></hr>
      <Expensive shopping={shopping} />
      <hr></hr>
      <Time />
    </div>
  );
};

export { Profile };
