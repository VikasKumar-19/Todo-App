import React, { useState } from "react";
import { removeItem, toggleItemStatus, updateItem } from "../store/actions";
import { connect } from "react-redux";

const TodoItem = ({
  item,
  updateTodoItem,
  removeTodoItem,
  toggleTodoItemStatus,
}) => {
  const [updateMode, setUpdateMode] = useState(false);
  const [updateTaskValue, setUpdateTaskValue] = useState("");

  const handleUpdateTask = () => {
    setUpdateMode(true);
    setUpdateTaskValue(item.task);
  };

  const handleSaveChanges = () => {
    updateTodoItem({ ...item, task: updateTaskValue });
    setUpdateMode(false);
    setUpdateTaskValue("");
  };

  const handleStatusChange = (event) => {
    toggleTodoItemStatus(item.id);
  };

  return (
    <div>
      {!updateMode ? (
        <div
          style={{
            display: "flex",
            gap: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="checkbox"
            onChange={handleStatusChange}
            checked={item.completed}
          />

          <p>
            {item.task}
            {"  "}
            {item.completed ? (
              <span style={{ color: "green", fontSize: 12 }}>Completed</span>
            ) : (
              <span style={{ color: "red", fontSize: 12 }}>Not Completed</span>
            )}
          </p>
        </div>
      ) : (
        <input
          value={updateTaskValue}
          onChange={(e) => setUpdateTaskValue(e.target.value)}
        />
      )}
      <button
        style={{ marginRight: 10 }}
        onClick={() => removeTodoItem(item.id)}
      >
        Remove
      </button>
      {!updateMode ? (
        <button disabled={item.completed} onClick={handleUpdateTask}>
          Update
        </button>
      ) : (
        <button onClick={handleSaveChanges}>Save</button>
      )}
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    updateTodoItem: (task) => dispatch(updateItem(task)),
    removeTodoItem: (id) => dispatch(removeItem(id)),
    toggleTodoItemStatus: (id) => dispatch(toggleItemStatus(id)),
  };
};

export default connect(null, mapDispatch)(TodoItem);
