import React from "react";
import { shallow } from "enzyme";
import TopNav from "./index";
import { Menu } from "antd";

const props = {
    location: { pathname: "/" }
};

describe("TopNav component test", () => {
  it("renders without crashes", () => {
      const wrapper = shallow(<TopNav {...props} />);

      const menu = wrapper.find(Menu);
      expect(menu.exists()).toBeTruthy();
      expect(menu.find(Menu.Item)).toHaveLength(2);
  });
});
