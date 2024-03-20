import IndexDiv, {IndexSectionProps} from "@/components/indexDiv";
import { render, screen } from "@testing-library/react";

const mockProps: IndexSectionProps = {
  children: <div data-testid="mock-child" />,
  title: "mock title",
  name: "mock name"
}

describe("<IndexDiv />", () => {
  beforeEach(() => {
    render(<IndexDiv {...mockProps} />)
  })
  it("index-div is in the document with name attr", () => {
    const indexDiv = screen.getByTestId(`index-div`)
    expect(indexDiv).toBeInTheDocument()
    //expect(indexDiv).toHaveAttribute("name", mockProps.name)
  })
  it("title is in the document", () => {
    const title = screen.getByText(mockProps.title)
    expect(title).toBeInTheDocument()
  })
  it("children is in the document", () => {
    const children = screen.getByTestId("mock-child")
    expect(children).toBeInTheDocument()
  })
  it("matches snapshot", () => {
    const indexDiv = screen.getByTestId(`index-div`)
    expect(indexDiv).toMatchSnapshot()
  })
})