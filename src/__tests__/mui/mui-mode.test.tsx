import { render, screen } from "../../test-utils";
import { MuiMode } from "../../components/mui/mui-mode";

describe("MuiMode", () => {
  it("Should renders text correctly", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
