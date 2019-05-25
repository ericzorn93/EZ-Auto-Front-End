import { Action } from "./../../interfaces/action.interface";
import {
  ADD_ALL_CARS_ACTION,
  ADD_MERCEDES_BENZ_ACTION,
  ADD_BMW_ACTION,
  ADD_AUDI_ACTION,
  ADD_LEXUS_ACTION,
  ADD_ACURA_ACTION,
  CARS_ACTION_ERROR
} from "./../types/car.types";

const initialState = {
  allCars: [],
  mercedesBenz: [],
  bmw: [],
  audi: [],
  lexus: [],
  acura: [],
  carsError: ""
};

const carsReducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ADD_ALL_CARS_ACTION:
      return {
        ...state,
        allCars: action.payload
      };

    case ADD_MERCEDES_BENZ_ACTION:
      return {
        ...state,
        mercedesBenz: action.payload
      };

    case ADD_BMW_ACTION:
      return {
        ...state,
        bmw: action.payload
      };

    case ADD_AUDI_ACTION:
      return {
        ...state,
        audi: action.payload
      };

    case ADD_LEXUS_ACTION:
      return {
        ...state,
        lexus: action.payload
      };

    case ADD_ACURA_ACTION:
      return {
        ...state,
        acura: action.payload
      };

    case CARS_ACTION_ERROR:
      return {
        ...state,
        carsError: action.payload
      };

    default:
      return state;
  }
};

export default carsReducer;
