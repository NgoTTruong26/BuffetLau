import { createSlice } from "@reduxjs/toolkit";
import Account from "components/layout/Header/User/Account";

interface initialState {
  value: JSX.Element;
}

const initialState: initialState = { value: Account() };

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login: (state, value) => {
      console.log(value);
    },
    logout: (state) => {},
  },
});

const { actions, reducer } = accountSlice;

export const { login, logout } = actions;

export default reducer;
