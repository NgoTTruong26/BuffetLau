import { createSlice } from "@reduxjs/toolkit";

interface Data {
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
  token: string;
}

interface initialState {
  login: {
    isFetching: boolean;
    data: Data | null;
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

export const { login, logout, loginLoading } = actions;

export default reducer;
