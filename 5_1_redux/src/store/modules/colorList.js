import { createAction, handleActions } from 'redux-actions';

// action
const CHANGE_INPUT = 'colorList/CHANGE_INPUT';
const INSERT = 'colorList/INSERT';
const UPDATE = 'colorList/UPDATE';
const REMOVE = 'colorList/REMOVE';

let id = 1;

// action creator
export const changeInput = createAction(CHANGE_INPUT, text => text);
export const insert = createAction(INSERT, color => ({ color, id: id++ }));
export const update = createAction(UPDATE, id => id);
export const remove = createAction(REMOVE, id => id);

const initialState = {
  input: '',
  list: []
};

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => {
      return {
        ...state,
        input: action.payload
      };
    },
    [INSERT]: (state, action) => {
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          color: action.payload.color,
          opacity: 1
        })
      };
    },
    [UPDATE]: (state, action) => {
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              opacity: item.opacity - 0.1
            };
          }
          return item;
        })
      };
    },
    [REMOVE]: (state, action) => {
      return {
        ...state,
        list: state.list.filter(item => {
          return item.id !== action.payload;
        })
      };
    }
  },
  initialState
);
