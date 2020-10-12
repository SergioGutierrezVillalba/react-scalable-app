import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

let container;

beforeEach(() => {
  container = document.createElement("div");
});

afterEach(() => {
  container.remove();
  container = null;
});

test("renders learn react link", () => {
  const app = render(<App />);
  expect(app.container.getElementsByTagName("div")[1].textContent).toBe(
    "Total: 0"
  );
});
