import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [items, updateItems] = useState([
    "Eat Bread",
    "Make Bread",
    "Bake Bread",
    "Cook Bread"
  ]);
  const [inputValue, changeInput] = useState("");
  let tempArray = [...items];

  const handleRemoveItem = target => {
    tempArray.splice(target, 1);
    updateItems(tempArray);
  };

  const renderItems = () => {
    return items.map((item, index) => (
      <li
        className="list-group-item"
        onClick={e => {
          handleRemoveItem(e.target.id);
        }}
        key={index}
        id={index}
      >
        <b> {index + 1}. </b>
        {item}
      </li>
    ));
  };

  return (
    <div className="todolist">
      <h1 className="display-4">Todo App</h1>
      <input
        className="form-control"
        onChange={e => {
          changeInput(e.target.value);
        }}
      />
      <br />
      <button
        className="btn btn-primary btn-lg"
        onClick={() => {
          updateItems([...items, inputValue]);
        }}
      >
        Add Item
      </button>
      <br />
      <ul className="list-group">
        <li className="list-group-item active">To Do's</li>
        {renderItems()}
      </ul>
    </div>
  );
}

export default TodoList;
