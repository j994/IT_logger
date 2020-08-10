import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import logReducer from "./reducers/logReducer";
import techReducer from "./reducers/techReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  log: logReducer,
  tech: techReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
