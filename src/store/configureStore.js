import { createStore, combineReducers } from "redux";

//Reducers
import calendar from "../reducers/calendar";

export default () => {
  const store = createStore(
    combineReducers({ calendar }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  console.log(store.getState());
  return store;
};
