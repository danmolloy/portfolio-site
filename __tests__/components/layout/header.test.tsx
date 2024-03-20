import Header, { HeaderProps, menuItems } from "@/components/layout/header";
import { act, fireEvent, render, screen } from '@testing-library/react'
import { animateScroll } from 'react-scroll'

jest.mock("react-scroll", () => ({
  animateScroll: {
    scrollToTop: jest.fn()
  },
  Link: (props: any) => <div></div>
}))

const mockProps: HeaderProps = {
  showMenu: false,
  setShowMenu: jest.fn(),
  setShowHeader: jest.fn(),
  showHeader: true
}

describe("<Header />", () => {
  beforeEach(() => {
    render(<Header {...mockProps} />)
  })
  it("header is in the document", () => {
    const header = screen.getByTestId("header")
    expect(header).toBeInTheDocument()
  })
  it('home btn is in the document and calls scrollToTop on click', () => {
    const homeBtn = screen.getByTestId("home-btn")
    expect(homeBtn).toBeInTheDocument()
    expect(homeBtn.textContent).toMatch("Home")
    act(() => {
      fireEvent.click(homeBtn)
    })
    expect(animateScroll.scrollToTop).toHaveBeenCalledWith({
      smooth: true, duration: 500
    })
  })
  it("menu icon is in the document and calls showMenu on click", () => {
    const menuIcon = screen.getByTestId("menu-icon")
    expect(menuIcon).toBeInTheDocument()
    act(() => {
      fireEvent.click(menuIcon)
    })
    expect(mockProps.setShowMenu).toHaveBeenCalled()
  })
  it("matches snapshot", () => {
    const header = screen.getByTestId("header")
    expect(header).toMatchSnapshot()
  })
  //it("all menuItems are in the document with expected to attrs and text content", () => {})
})