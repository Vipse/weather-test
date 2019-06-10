import { GET_FORECAST } from "./types";
import { getMockForecast } from "fakeAPI";

export const getForecast = () => {
  return dispatch => {
      return getMockForecast().then(forecast => {
          dispatch({
              type: GET_FORECAST,
              payload: forecast[0].days,
          });
      });
  }
};
