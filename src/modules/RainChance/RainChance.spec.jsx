import React from "react";
import { shallow } from "enzyme";
import { RainChance } from "./index";
import renderer from "react-test-renderer";

const props = {
    loadingForecast: true,
    forecast: [],
    onGetForecast: jest.fn()
};

describe("RainChance component test", () => {
  it("renders without crashes", () => {
      const wrapper = shallow(<RainChance {...props} />);
      expect(wrapper.exists()).toBeTruthy();
      expect(props.onGetForecast).toBeCalledTimes(1);
  });

  it("renders styles correctly", () => {
      const tree = renderer.create(
          <RainChance {...props} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
  });
});
