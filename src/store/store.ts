import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { isDevlopment } from "../services/environment.service";
import rootReducer from "./reducers/rootReducer";

// Array of all Redux Middleware
const reduxMiddleware = [thunk];

let finalMiddleware;
if (isDevlopment) {
  const composeEnhancers = composeWithDevTools({ trace: false });
  finalMiddleware = composeEnhancers(applyMiddleware(...reduxMiddleware));
} else {
  finalMiddleware = applyMiddleware(...reduxMiddleware);
}

// Complete redux store
const store = createStore(rootReducer, finalMiddleware);

export default store;
