import { render, screen } from "@testing-library/react";
import { Skills } from "../../components/skills/skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];
  it("Should renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  it("should render a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    listItemElements.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  it("Should render login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  it("Should not render star learning button", () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });
});
