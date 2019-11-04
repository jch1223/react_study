import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';

const PENDING = 'news/PENDING';
const RESOLVED = 'news/RESOLVED';
const REJECTED = 'news/REJECTED';

const pending = createAction(PENDING);
const resolved = createAction(RESOLVED, data => data);
const rejected = createAction(REJECTED, err => err);

const callNewsAPI = category => {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=9a00e0a44dd44c109340af0073fcaaeb`
  );
};

export const getNews = category => dispatch => {
  dispatch(pending());

  return callNewsAPI(category)
    .then(data => {
      dispatch(resolved(data));
    })
    .catch(err => {
      dispatch(rejected(err));
      throw err;
    });
};

const initialState = {
  pending: false,
  data: null,
  error: null
};

export default handleActions(
  {
    [PENDING]: (state, action) => ({
      ...state,
      pending: true,
      error: false
    }),
    [RESOLVED]: (state, action) => ({
      ...state,
      data: action.payload,
      pending: false
    }),
    [REJECTED]: (state, action) => ({
      ...state,
      pending: false,
      error: action.payload
    })
  },
  initialState
);
