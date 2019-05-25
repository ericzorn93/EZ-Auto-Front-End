import axios from "axios";

export const primaryApi: string = "https://ez-auto.herokuapp.com/api/v1";

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
