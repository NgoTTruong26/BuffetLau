import { createSlice } from "@reduxjs/toolkit";
import { User } from "types/User";

interface initialState {
  login: {
    isFetching: boolean;
    data: User | null;
    error: boolean;
  };
  logout: {
    isFetching: boolean;
    error: boolean;
  };
  register: {
    isFetching: boolean;
    success: boolean;
    error: boolean;
  };
}

const initialState: initialState = {
  login: {
    isFetching: false,
    data: null,
    error: false,
  },
  logout: {
    isFetching: false,
    error: false,
  },
  register: {
    isFetching: false,
    success: false,
    error: false,
  },
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    loginLoading: (state) => ({
      ...state,
      login: {
        ...state.login,
        isFetching: true,
      },
    }),
    LogoutLoading: (state) => ({
      ...state,
      logout: {
        ...state.logout,
        isFetching: true,
      },
    }),

    login: (state, value) => ({
      ...state,
      login: {
        isFetching: false,
        data: value.payload,
        error: false,
      },
    }),
    logout: (state) => ({
      ...state,
      logout: {
        isFetching: false,
        error: false,
      },
      login: {
        ...state.login,
        data: null,
      },
    }),
  },
});

const { actions, reducer } = accountSlice;

export const { login, logout, loginLoading, LogoutLoading } = actions;

export default reducer;
