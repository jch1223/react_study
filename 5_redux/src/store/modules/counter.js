// action
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const CHANGE_COLOR = 'counter/CHANGE_COLOR';

// action creator
export const increment = () => {
  return { type: INCREMENT };
};
export const decrement = () => {
  return { type: DECREMENT };
};
export const changeColor = color => {
  return { type: CHANGE_COLOR, color };
};

const initialState = {
  number: 0,
  color: '#bfcd7e'
};

// counter reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };

    case DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };

    case CHANGE_COLOR:
      return {
        ...state,
        color: action.color
      };

    default:
      return state;
  }
};
