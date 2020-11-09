import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './effect.css';

const PageTitle = () => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You have clicked ${count} times`;
  }, [count]);
  const handleClick = () => setCount(prevCount => prevCount + 1);
  return (
    <div>
      <p>Hello, World</p>
      <input
        type="text"
        onChange={({ target: { value } }) => setName(value)}
      ></input>
      <button onClick={handleClick} style={{ padding: 20 }}>
        Increment Count: {count}
      </button>
    </div>
  );
};

const Unsubscribe = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalID = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(intervalID);
  });
  return (
    <div>
      <h1>The current time is:</h1>
      <p>{time}</p>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count;
  });
  return (
    <button
      onClick={() => setCount(prevCount => prevCount + 1)}
      style={{ textAlign: 'center' }}
    >
      Count is: {count}
    </button>
  );
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  render() {
    console.log(this.state.time);
    return (
      <div>
        <p>Current time is: {this.state.time}</p>
        <button
          onClick={() =>
            ReactDOM.unmountComponentAtNode(document.getElementById('root'))
          }
        >
          UnMount Component
        </button>
      </div>
    );
  }
}

const EffectPractice = ({ newcount }) => {
  const [count, setCount] = useState(newcount);
  useEffect(() => {
    count ? alert(`Count is incremented to: ${count}`) : null;
  }, [count]);

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalID = setInterval(() =>
      setTime(new Date().toLocaleTimeString())
    );
    return () => {
      clearInterval(intervalID);
    };
  });

  const [userName, setUserName] = useState(localStorage.getItem('userName'));
  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName]);

  return (
    <div>
      <p>Current time is: {time}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: 10, fontFamily: 'arial', cursor: 'pointer' }}
      >
        Increment
      </button>
      <p>Your username is: {userName || ''}</p>
      <input
        type="text"
        value={userName}
        onChange={event => {
          setUserName(event.target.value);
        }}
      ></input>
    </div>
  );
};

export { PageTitle, Unsubscribe, Counter, EffectPractice };
