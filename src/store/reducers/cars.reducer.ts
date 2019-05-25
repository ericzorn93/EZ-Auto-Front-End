import { Action } from "./../../interfaces/action.interface";
import { ADD_ALL_CARS_ACTION } from "./../types/car.types";

const initialState = {
  allCars: [],
  mercedesBenz: [],
  bmw: [],
  audi: [],
  lexus: [],
  acura: []
};

const carsReducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ADD_ALL_CARS_ACTION:
      break;

    default:
      return state;
  }
};

export default carsReducer;
