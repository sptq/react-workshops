import {createAction, handleActions} from 'redux-actions';

const defaultState = {
    todos: [],
    isLoading: false
};

// wypełniene danymi
// zaznaczenie czy zadanie zostało wykonane
const ATTACH_DATA = 'ATTACH_DATA';
const SET_DONE = 'SET_DONE';
const SET_STATUS = 'SET_STATUS';

//akcje
export const attatchData = createAction(ATTACH_DATA);
export const setDone = createAction(SET_DONE);
export const setStatus = createAction(SET_STATUS);

//reducer
export default handleActions({
    [ATTACH_DATA]: (state, action) => { 
        return {...state, todos: action.payload};
    },

    [SET_STATUS]: (state, action) => {
        return {...state, isLoading: action.payload}
    },

    [SET_DONE]: (state, action) => {
        const todos = state.todos.map(item => {
            if (item.id === action.payload) {
                item.completed = true;
            }

            return {...item};
        });

        return {...state, todos};
    }
}, defaultState);
