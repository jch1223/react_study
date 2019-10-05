//action, action creator, reducer

//action
const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

//action creators
export const increment = () => {
  return {
    type: INCREMENT
  };
};
export const decrement = () => {
  return {
    type: DECREMENT
  };
};

const initialState = {
  counter: 0
};

//reducer
export default function conter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}
