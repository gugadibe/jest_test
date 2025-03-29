import { fireEvent, render, screen } from "@testing-library/react";
import { CounterTwo } from "../../components/counter-two/counter-two";
import { act } from "react";

describe("CounterTwo", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("handles are called", () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />
    );

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    fireEvent.click(incrementButton);
    expect(incrementHandler).toHaveBeenCalledTimes(1);

    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    expect(decrementHandler).toHaveBeenCalledTimes(2);
  });
});
