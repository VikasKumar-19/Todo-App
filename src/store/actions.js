import { nanoid } from 'nanoid'
import { ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM, UPDATE_ITEM } from './reducers/TodoListReducer';

export const addItem = (task)=>{
    return {
        type: ADD_ITEM,
        payload:{
            id: nanoid(),
            task,
        }
    }
}

export const removeItem = (id)=>{
    return {
        type: REMOVE_ITEM,
        payload:{
            id
        }
    }
}

export const updateItem = (modifiedItem)=>{
    return {
        type: UPDATE_ITEM,
        payload: {
            id: modifiedItem.id,
            task: modifiedItem.task,
            completed: modifiedItem.completed,
        }
    }
}

export const toggleItemStatus = (id)=>{
    return {
        type: TOGGLE_ITEM,
        payload: {
            id: id,
        }
    }
}

