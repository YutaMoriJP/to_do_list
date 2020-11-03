import React, { useState } from 'react';

const Toggle = () => {
  const [color, setColor] = useState();
  const backgorund = { backgroundColor: color };
  return (
    <div style={{ ...backgorund, height: '100%' }}>
      <button onClick={() => setColor('Aqua')}>Aqua</button>
      <button onClick={() => setColor('Purple')}>Purple</button>
      <button onClick={() => setColor('Seagreen')}>Seagreen</button>
    </div>
  );
};

const IsLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <p>Page has {isLoading ? 'not loaded yet' : 'loaded'}</p>
    </div>
  );
};

const Email = () => {
  const [email, setEmail] = useState('');
  const handleChange = ({ target }) => setEmail(target.value);
  return (
    <form>
      <label>The Email is: {email}</label>
      <input type="text" value={email} onChange={handleChange}></input>
      <label>
        Type in your phone number and ensure that it follows the 'xxx xxx-xxxx'
        format:
      </label>
    </form>
  );
};

const Phone = () => {
  const [phone, setPhone] = useState('');
  const format = /^\d{1,10}$/;
  const handleChange = ({ target }) =>
    format.test(target.value) ? setPhone(target.value) : null;
  return (
    <div>
      <form>
        <label>
          Type in your phone number and ensure that it follows the 'xxx
          xxx-xxxx' format:
        </label>
        <input type="text" value={phone} onChange={handleChange} />
      </form>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(prevCount => setCount(prevCount + 1));
  return <button onClick={handleClick}>Current count is: {count}</button>;
};

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  render() {
    return (
      <button onClick={this.handleClick} style={{ cursor: 'pointer' }}>
        Current Count is: {this.state.count}
      </button>
    );
  }
}

const Login = () => {
  const [formData, setFormData] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };
  return (
    <form>
      <input
        value={formData.firstName}
        onChange={handleChange}
        name="firstName"
        type="text"
      />
      <input
        value={formData.password}
        onChange={handleChange}
        type="password"
        name="password"
      />
    </form>
  );
};

function Subject() {
  const [state, setState] = useState({
    currentGrade: 'B',
    classmates: ['Hasan', 'Sam', 'Emma'],
    classDetails: { topic: 'Math', teacher: 'Ms. Barry', room: 201 },
    exams: [
      { unit: 1, score: 91 },
      { unit: 2, score: 88 },
    ],
  });
}

const Subject = () => {
  const [currentGrade, setCurrentGrade] = useState('B');
  const [classMates, setClassMates] = useState(['Hasan', 'Sam', 'Emma']);
  const [classDetails, setClassDetails] = useState({
    topic: 'Math',
    teacher: 'Ms. Barry',
    room: 201,
  });
  const [exams, setExams] = useState([
    { unit: 1, score: 91 },
    { unit: 2, score: 88 },
  ]);
};

export default function AppFunction() {
  const [newTask, setNewTask] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask(prev => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allTasks, setAllTasts] = useState([]);
  const handleSubmit = event => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasts(prev => [newTask, ...prev]);
    setNewTask({});
  };
  const handleDelete = taskIdToRemove => {
    setAllTasts(prev => prev.filter(task => task.id !== taskIdToRemove));
  };

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );


export { Toggle, IsLoading, Email, Phone, Counter, ClassCounter };
