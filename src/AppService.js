import { attatchData, setStatus } from './store/TodoReducer';

export const getTodos = () => {
    return async (dispatch, getState) => {
        const todos = await dispatch(callTodoApi());
        dispatch(attatchData(todos));
        dispatch(setStatus(false));
    };
};

export const callTodoApi = () => {
    return async (dispatch) => {
        dispatch(setStatus(true));

        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();
        
        return todos;
    }
};