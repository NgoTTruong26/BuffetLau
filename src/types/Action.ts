import { Dispatch } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";

export interface Action<T> {
  dispatch: Dispatch;
  navigate: NavigateFunction;
  user: T | null;
}
