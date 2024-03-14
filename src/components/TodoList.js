import { connect } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((item) => (
        <TodoItem key={item.id} item={item}  />
      ))}
    </div>
  );
};

const mapState = (state) => {
  return {
    todos: state.todoList.todos,
  };
};

export default connect(mapState)(TodoList);