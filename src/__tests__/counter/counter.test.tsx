import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "../../components/counter/counter";

describe("Counter", () => {
  it("Should render correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
  });

  it("Should renders acount of 0", () => {
    render(<Counter />);
    const counterELement = screen.getByRole("heading");
    expect(counterELement).toHaveTextContent("0");
  });

  it("Should renders count of 1 after click increment button", () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  it("Should renders count of 2 after click the increment button twice", () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    user.dblClick(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  it("Should renders count of 10 after click the set button", () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", { name: "Set" });
    user.click(setButton);
    expect(amountInput).toHaveValue(11);
  });

  it("Should test if elements are focused in the right order", () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    user.tab();
    expect(incrementButton).toHaveFocus();
    user.tab();
    expect(amountInput).toHaveFocus();
    user.tab();
    expect(setButton).toHaveFocus();
  });
});
