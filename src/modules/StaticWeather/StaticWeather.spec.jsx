import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import StaticWeather from "./index";

describe("StaticWeather component test", () => {
  it("renders without crashes", () => {
      const wrapper = shallow(<StaticWeather />);
      expect(wrapper.exists()).toBeTruthy();
  });

  it("renders styles correctly", () => {
      const tree = renderer.create(
          <StaticWeather />
      ).toJSON();
      expect(tree).toMatchSnapshot();
  });
});
