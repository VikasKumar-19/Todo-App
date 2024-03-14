import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../store/actions";

const AddTodo = ({ addTodoItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    addTodoItem(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputValueChange} />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return { addTodoItem: (task) => dispatch(addItem(task)) };
};

export default connect(null, mapDispatch)(AddTodo);
