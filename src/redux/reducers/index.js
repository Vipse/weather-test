import { combineReducers } from "redux";

import forecastReducer from "./forecastReducer";


export default combineReducers({
    forecastReducer: forecastReducer,
});
