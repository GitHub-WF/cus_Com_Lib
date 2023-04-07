import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Button, { ButtonProps, ButtonSize, ButtonType } from "./button";
const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: "klass",
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe("test Button component", () => {
  it("should render the correct default button", () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText("Nice") as HTMLButtonElement;
    // expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    // expect(element).toHaveClass("btn btn_default");
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct component based on different props", () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText("Nice");
    // expect(element).toBeInTheDocument();
    // expect(element).toHaveClass("btn_primary btn_lg klass");
  });
  it("should render a link when btnType equals like and href is provided", () => {
    const wrapper = render(
      <Button btnType={ButtonType.Link} href="http://dummyurl">
        Link
      </Button>
    );
    const element = wrapper.getByText("Link");
    // expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    // expect(element).toHaveClass("btn btn_link");
  });
  it("should render disabled button when disabled set to true", () => {
    const wrapper = render(<Button {...disabledProps}>Disabled</Button>);
    const element = wrapper.getByText("Disabled") as HTMLButtonElement;
    // expect(element).toBeInTheDocument();
    fireEvent.click(element);
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });
});
