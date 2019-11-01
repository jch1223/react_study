import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';

const PENDING = 'news/PENDING';
const RESOLVED = 'news/RESOLVED';
const REJECTED = 'news/REJECTED';

const pending = createAction(PENDING);
const resolved = createAction(RESOLVED);
const rejected = createAction(REJECTED);
