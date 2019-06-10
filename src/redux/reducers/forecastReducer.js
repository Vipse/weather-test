import { GET_FORECAST } from "redux/actions/types";

export const initialState = {
    forecast: [],
    loadingForecast: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FORECAST:
            return {
                ...state,
                forecast: action.payload,
                loadingForecast: false,
            };
        default:
            return { ...state }
    }
}
