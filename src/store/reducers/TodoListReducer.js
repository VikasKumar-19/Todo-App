const getTodosFromLocalStorage = () => {
  const value = JSON.parse(localStorage.getItem("todos")) || [];
  return value;
};

const setTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

getTodosFromLocalStorage();

const initState = {
  todos: getTodosFromLocalStorage(),
};

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";

export const TodoListReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      let updatedState = {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            task: action.payload.task,
            completed: false,
          },
        ],
      };
      setTodosToLocalStorage(updatedState.todos);
      return updatedState;
    }
    case REMOVE_ITEM: {
      let updatedState = {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id),
      };
      setTodosToLocalStorage(updatedState.todos);
      return updatedState;
    }

    case UPDATE_ITEM: {
      let updatedState = {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
      setTodosToLocalStorage(updatedState.todos);
      return updatedState;
    }

    case TOGGLE_ITEM: {
        let updatedState = {
          ...state,
          todos: state.todos.map((item) =>
            item.id === action.payload.id ? {...item, completed: !item.completed} : item
          ),
        };
        setTodosToLocalStorage(updatedState.todos);
        return updatedState;
      }

    default:
      return state;
  }
};
