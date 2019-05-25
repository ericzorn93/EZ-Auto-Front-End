import { ADD_PRIMARY_API_DATA_ACTION } from "./../types/primary.api.types";
import { Action } from "./../../interfaces/action.interface";

const initialState = {
  primaryApi: {}
};

const primaryApiReducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ADD_PRIMARY_API_DATA_ACTION:
      return {
        ...state,
        primaryApi: action.payload
      };
    default:
      return state;
  }
};

export default primaryApiReducer;
