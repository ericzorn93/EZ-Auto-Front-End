import { combineReducers } from "redux";
import carsReducer from "./cars.reducer";

const rootReducer = combineReducers({
  cars: carsReducer
});

export default rootReducer;
