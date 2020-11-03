import React from 'react';

class Note extends React.Component {
  render() {
    const { toDoList, handleChange, handleSubmit, title } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Choose Title..."
          onChange={handleChange}
        ></input>
        <input
          type="text"
          value={toDoList}
          name="toDoList"
          onChange={handleChange}
          placeholder="Take Note..."
        ></input>
        <input type="submit"></input>
      </form>
    );
  }
}

export default Note;
