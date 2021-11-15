import { render } from "@testing-library/react";
import { UIText } from "../ui-text";

describe("UI-Text", () => {
  it("should render correctly", () => {
    const component = render(<UIText tag="h1">Foi</UIText>);

    expect(component.findByText("Foi")).toBeTruthy();
  });
});
