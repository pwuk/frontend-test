import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Insight capital test…/i);
  expect(linkElement).toBeInTheDocument();
});
