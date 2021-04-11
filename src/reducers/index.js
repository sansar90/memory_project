import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import video from './video';

export const reducers = combineReducers({ posts, auth, video });
