import renderer from "react-test-renderer";
import React from "react";

test("expect Hello World", () => {
  const component = renderer.create(<h1 id="text">Hello World</h1>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
