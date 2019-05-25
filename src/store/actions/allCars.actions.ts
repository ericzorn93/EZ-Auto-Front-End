import {
  ADD_ALL_CARS_ACTION,
  ADD_MERCEDES_BENZ_ACTION,
  ADD_BMW_ACTION,
  ADD_AUDI_ACTION,
  ADD_LEXUS_ACTION,
  ADD_ACURA_ACTION,
  CARS_ACTION_ERROR
} from "../types/car.types";

import { fetchAllCars } from "../../services/api.service";

export const addAllCarsAction = () => {
  return async (dispatch: Function, getState: any) => {
    try {
      const allCarsResponse = await fetchAllCars();

      // Adds all cars to the redux store
      dispatch({
        type: ADD_ALL_CARS_ACTION,
        payload: allCarsResponse
      });

      /******** Adds individual cars to the redux store *********/
      dispatch({
        type: ADD_MERCEDES_BENZ_ACTION,
        payload: allCarsResponse.mercedesBenz
      });

      dispatch({
        type: ADD_BMW_ACTION,
        payload: allCarsResponse.bmw
      });

      dispatch({
        type: ADD_AUDI_ACTION,
        payload: allCarsResponse.audi
      });

      dispatch({
        type: ADD_LEXUS_ACTION,
        payload: allCarsResponse.lexus
      });

      dispatch({
        type: ADD_ACURA_ACTION,
        payload: allCarsResponse.acura
      });
      /******** END individual cars to the redux store *********/
    } catch (error) {
      console.error(error);
      dispatch({
        type: CARS_ACTION_ERROR,
        payload: "Could not fetch all cars successfully!"
      });
    }
  };
};
