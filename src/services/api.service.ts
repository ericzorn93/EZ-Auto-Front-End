import axios from "axios";
import store from "../store/store";

export const primaryApi: string = "https://ez-auto.herokuapp.com/api/v1";

// Fetches all primary API Data
export const fetchPrimaryApi = async () => {
  try {
    const { data: primaryApiData } = await axios.get(primaryApi);
    return primaryApiData;
  } catch (error) {
    return error;
  }
};

// Fetches all cars from the API
export const fetchAllCars = async () => {
  try {
    const { data: primaryApiData } = await axios.get(primaryApi);
    const { data: allCarsResponse } = await axios.get(
      primaryApiData.routes.allCars
    );

    return allCarsResponse;
  } catch (error) {
    return error;
  }
};

// Fetches all cars from the Mercedes Benz Data
export const fetchMercedes = async () => {
  const state: any = store.getState();

  try {
    if (!Object.keys(state.primaryApi).length) {
      const { data: primaryApiData } = await axios.get(primaryApi);
      const { data: mercedesBenzData } = await axios.get(
        primaryApiData.routes.mercedesBenz
      );
      return mercedesBenzData;
    }

    const { data: mercedesBenzData } = await axios.get(
      state.primaryApi.primaryApi.routes.mercedesBenz
    );
    return mercedesBenzData;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// Fetches all cars from the Mercedes Benz Data
export const fetchBmw = async () => {
  const state: any = store.getState();

  try {
    if (!Object.keys(state.primaryApi).length) {
      const { data: primaryApiData } = await axios.get(primaryApi);
      const { data: bmwData } = await axios.get(primaryApiData.routes.bmw);
      return bmwData;
    }

    const { data: bmwDataActualData } = await axios.get(
      state.primaryApi.primaryApi.routes.bmw
    );
    return bmwDataActualData;
  } catch (error) {
    console.error(error);
    return error;
  }
};
