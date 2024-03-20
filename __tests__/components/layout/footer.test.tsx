import Footer from "@/components/layout/footer";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { animateScroll } from 'react-scroll'

jest.mock("react-scroll", () => ({
  animateScroll: {
    scrollToTop: jest.fn()
  }
}))

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
    act(() => {
      fireEvent.click(backToTopBtn)
    })
    expect(animateScroll.scrollToTop).toHaveBeenCalledWith({
      smooth: true, 
      duration: 750
    })
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