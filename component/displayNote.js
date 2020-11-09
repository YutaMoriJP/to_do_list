import React from 'react';
import Note from './note.js';
import './displaynote.css';
import { Greeting } from './greeting';
import { NavBar } from './navbar';

class DisplayNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: [], toDoList: '', title: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { toDoList, title } = this.state;
    this.setState(({ notes }) => ({
      notes: [...notes, { title, note: toDoList, id: Date.now() }],
    }));
  }
  handleClick(uniqID) {
    this.setState(({ notes }) => ({
      notes: notes.filter(({ id }) => id !== uniqID),
    }));
  }
  render() {
    const { toDoList, notes, title } = this.state;
    return (
      <div>
        <NavBar />
        <main>
          <h1>To Do List:</h1>
          <div className="notes">
            {!notes.length
              ? null
              : notes.map(({ note, title, id }, index) => {
                  return (
                    <div
                      className="box"
                      style={{
                        background: index % 2 ? 'lightyellow' : 'lightblue',
                      }}
                    >
                      <button
                        style={{
                          background: index % 2 ? 'lightblue' : 'lightyellow',
                        }}
                        onClick={() => this.handleClick(id)}
                      >
                        -
                      </button>
                      <h3>{title}</h3>
                      <p>{note}</p>
                    </div>
                  );
                })}
          </div>
        </main>
        <Note
          toDoList={toDoList}
          title={title}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <hr></hr>
        <Greeting />
      </div>
    );
  }
}

export default DisplayNote;
