import { createSlice } from "@reduxjs/toolkit";

interface State {
  data: {
    id: string;
    dateOfBirth: string;
    email: string;
    gender: boolean;
    phoneNumber: string;
    address: string;
    fullName: string;
    avatar: string;
    admin: boolean;
    username: string;
  } | null;
}

const initialState: State = { data: null };

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login: (state, value) => ({
      ...state,
      data: value.payload.data,
    }),
    logout: (state) => ({
      ...state,
      data: null,
    }),
  },
});

const { actions, reducer } = accountSlice;

export const { login, logout } = actions;

export default reducer;
