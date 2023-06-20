import { render } from "@testing-library/react";

// components
import Home from "../../pages";

describe("Home", () => {
  it("renders a heading", () => {
    const { getByText } = render(<Home />);

    expect(getByText(/Home Page/)).toBeInTheDocument();
  });
});
