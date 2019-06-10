import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {getForecast} from "./forecastActions";
import {GET_FORECAST} from "./types";
import {forecastResponse} from "../../fakeAPI/index";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("forecast actions test", () => {
    it("getForecast", () => {
        const expectedActions = [
            {
                type: GET_FORECAST,
                payload: forecastResponse[0].days
            },
        ];

        const store = mockStore({forecast: {}});

        return store.dispatch(getForecast()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
