import {combineReducers, legacy_createStore as createStore} from 'redux'
import { TodoListReducer } from './reducers/TodoListReducer'

const rootReducer = combineReducers({
    todoList: TodoListReducer
})

const store = createStore(rootReducer);

export default store;