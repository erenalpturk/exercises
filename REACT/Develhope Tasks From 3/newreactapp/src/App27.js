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

  handleRemoveItem = (index) => {
    const updatedItems = [...this.state.items];
    updatedItems.splice(index, 1); // Remove the item at the specified index
    this.setState({ items: updatedItems });
  };

  handleReset = () => {
    this.setState({ items: [], newItemText: '' }); // Clear both items and input field
  };

  render() {
    const { items, newItemText } = this.state;

    return (
      <div>
        <h2>Todo List</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => this.handleRemoveItem(index)}>Remove</button>
            </li>
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
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default TodoList;
