import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItemText: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newItemText: event.target.value });
  };

  handleAddItem = () => {
    const { newItemText } = this.state;
    if (newItemText) {
      this.setState((prevState) => ({
        items: [...prevState.items, newItemText],
        newItemText: '', // Clear the input field after adding an item
      }));
    }
  };

  render() {
    const { items, newItemText } = this.state;

    return (
      <div>
        <h2>Todo List</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={newItemText}
            onChange={this.handleInputChange}
            placeholder="Add new item"
          />
          <button onClick={this.handleAddItem}>Add</button>
        </div>
      </div>
    );
  }
}

export default TodoList;
