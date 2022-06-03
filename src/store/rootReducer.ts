import { combineReducers } from '@reduxjs/toolkit';

import app from './app';
import user from './user';

const rootReducer = combineReducers({
  app,
  user,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
