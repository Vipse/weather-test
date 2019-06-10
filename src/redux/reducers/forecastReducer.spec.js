import reducer from "./forecastReducer"
import {GET_FORECAST} from "../actions/types";

describe("forecast reducer tests", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual(
            {
                forecast: [],
                loadingForecast: true,
            })
    });

    it("should handle GET_FORECAST", () => {
        const mockPayload = [
            {
                "day": 2,
                "amount": 50
            }, {
                "day": 3,
                "amount": 10
            }, {
                "day": 4,
                "amount": 12
            }
        ];

        expect(
            reducer([], {
                type: GET_FORECAST,
                payload: mockPayload
            })
        ).toEqual(
            {
                forecast: mockPayload,
                loadingForecast: false,
            });
    })
});
