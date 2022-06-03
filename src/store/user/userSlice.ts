import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPanDetails } from '@/services/user';

import { userState, IPanRequest } from './types';

export const initialState: userState = {
  status: '',
  error: '',
  data: {} as any,
};

export const panCardDetailsThunk = createAsyncThunk(
  'user/pan_card_details',
  async ({ panNumber, dob }: IPanRequest) => {
    return await getPanDetails(panNumber, dob);
  }
);

const userSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    clearError: (state: userState) => {
      state.error = '';
    },
  },
  // redux thunk will be added in extraReducers
  extraReducers: (builder: ActionReducerMapBuilder<userState>) => {
    // Pending state of API
    builder.addCase(panCardDetailsThunk.pending, (state: userState) => {
      state.status = 'loading';
    });

    // On getting API response
    builder.addCase(panCardDetailsThunk.fulfilled, (state: userState, { payload }) => {
      state.status = '';
      state.data = payload.data;
    });

    // On promise rejection
    builder.addCase(panCardDetailsThunk.rejected, (state: userState, { error }) => {
      state.status = '';
      state.data = {} as any;
      state.error = error.message;
    });
  },
});

export const { clearError } = userSlice.actions;

export default userSlice.reducer;
