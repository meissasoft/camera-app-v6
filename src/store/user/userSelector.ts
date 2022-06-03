import { AppState } from '../rootReducer';

export const getUserDataSelector = (state: AppState) => state.user;
