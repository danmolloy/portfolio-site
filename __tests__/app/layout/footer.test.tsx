import Footer from "@/app/layout/footer";
import { act, fireEvent, render, screen } from "@testing-library/react";



describe("<Footer />", () => {
  beforeEach(() => {
    render(<Footer />)
  })
  it("footer is in the document", () => {
    const footer = screen.getByTestId("footer")
    expect(footer).toBeInTheDocument()
  })
  it("back to top btn is in the document and calls scrollToTop on click", () => {
    const backToTopBtn = screen.getByText("Back to top")
    expect(backToTopBtn).toBeInTheDocument()
    expect(backToTopBtn).toHaveAttribute("href", "/")
    
  })
  it("design and building credit is in the document", () => {
    const buildCredit = screen.getByText("Designed and built by Daniel Molloy")
    expect(buildCredit).toBeInTheDocument()
  })
  it("matches snapshot", () => {
    const footer = screen.getByTestId("footer")
    expect(footer).toMatchSnapshot()
  })
})