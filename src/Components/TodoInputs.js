import React, { Component } from 'react';
import TodoItems from './TodoItems';


class TodoInputs extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

addItem(e) {
  if (this._inputElement.items !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    }
  };
  this.setState((prevState) => {
    return {
      items: prevState.items.concat(newItem)
    };
  });
  this._inputElement.value = "";

  console.log(this.state.items);

  e.preventDefault();
}

  render() {
    return (
      <div className="Input-Box">
        <div className="TodoInputsMain">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
            placeholder="Enter Task">
            </input>
            <button type="submit"> Add Todo </button>
          </form>
        </div>
        < TodoItems entries= {this.state.items} />
      </div>

    );
  }
}

export default TodoInputs;
