import { ActionReducerMapBuilder, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { appState } from './types';

export const initialState: appState = {
  verificationStep: 0,
  selectedLanguage: 'en',
  cardFront: '',
  cardBack: '',
  recordedVideo: '',
  noRecordFound: false,
  updationFailed: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setVerificationStep: (state: appState, action: PayloadAction<number>) => {
      state.verificationStep = action.payload;
    },
    setRecordedVideo: (state: appState, action: PayloadAction<string>) => {
      state.recordedVideo = action.payload;
    },
    setCardFront: (state: appState, action: PayloadAction<string>) => {
      state.cardFront = action.payload;
    },
    setCardBack: (state: appState, action: PayloadAction<string>) => {
      state.cardBack = action.payload;
    },
    setNoRecordFound: (state: appState, action: PayloadAction<boolean>) => {
      state.noRecordFound = action.payload;
    },
    setUpdationFailed: (state: appState, action: PayloadAction<boolean>) => {
      state.updationFailed = action.payload;
    },
  },
  // redux thunk will be added in extraReducers
  extraReducers: (builder: ActionReducerMapBuilder<appState>) => {
    // Pending state of API
    console.log(builder);
  },
});

export const { setVerificationStep, setRecordedVideo, setCardFront, setCardBack, setNoRecordFound, setUpdationFailed } =
  appSlice.actions;

export default appSlice.reducer;
