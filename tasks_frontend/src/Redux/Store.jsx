import { createStore } from "redux";
import { reducer } from "./reducer";
const initialState = {
  tasks: [],
  pages: 0,
  curPage: 1,
};

export const store = createStore(reducer, initialState);
