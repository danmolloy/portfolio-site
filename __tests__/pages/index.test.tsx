import Home from "@/pages";
import { render, screen } from "@testing-library/react";

describe("<Home />", () => {
  beforeEach(() => {
    render(<Home />)
  })
  it("layout is in the document", () => {
    const layout = screen.getByTestId("layout")
    expect(layout).toBeInTheDocument()
  })
  it("index-section is in the document", () => {
    const indexSection = screen.getByTestId("index-section")
    expect(indexSection).toBeInTheDocument()
  })
  it("matches snapshot", () => {
    const layout = screen.getByTestId("layout")
    expect(layout).toMatchSnapshot()
  })
})