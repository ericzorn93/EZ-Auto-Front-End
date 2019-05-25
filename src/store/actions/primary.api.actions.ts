import { ADD_PRIMARY_API_DATA_ACTION } from "../types/primary.api.types";
import { fetchPrimaryApi } from "../../services/api.service";

export const addPrimayApiDataAction = () => {
  return async (dispatch: Function, getState: any) => {
    // Primary API call to add to redux store
    const primaryApiData = await fetchPrimaryApi();

    dispatch({
      type: ADD_PRIMARY_API_DATA_ACTION,
      payload: primaryApiData
    });
  };
};
