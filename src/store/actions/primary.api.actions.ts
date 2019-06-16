import { ADD_PRIMARY_API_DATA_ACTION } from "../types/primary.api.types";
import { fetchPrimaryApi } from "../../services/api.service";

export const addPrimayApiDataAction = () => {
  return async (dispatch: Function, getState: any) => {
    // Primary API call to add to redux store
    const sessionPrimaryApiData = sessionStorage.getItem("primaryApiData");

    // Determine if second API call is necessary, based on session storage properties
    let primaryApiData: object;
    if (sessionPrimaryApiData) {
      primaryApiData = JSON.parse(sessionPrimaryApiData);
    } else {
      primaryApiData = await fetchPrimaryApi();
    }

    dispatch({
      type: ADD_PRIMARY_API_DATA_ACTION,
      payload: primaryApiData
    });
  };
};
