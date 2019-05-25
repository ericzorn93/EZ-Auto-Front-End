import { combineReducers } from "redux";

import carsReducer from "./cars.reducer";
import primaryApiReducer from "./primary.api.reducer";

const rootReducer = combineReducers({
  primaryApi: primaryApiReducer,
  cars: carsReducer
});

export default rootReducer;
