import { menuItems } from "@/components/layout/header";
import Menu, { MenuProps } from "@/components/menu";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Link, animateScroll } from 'react-scroll'

jest.mock("react-scroll", () => ({
  Link: (props: any) => <div />,
  animateScroll: {
    scrollToTop: jest.fn()
  }
}))

const mockProps: MenuProps = {
  setShowMenu: jest.fn(),
  setShowHeader: jest.fn(),
  showMenu: false
}

describe("<Menu />", () => {
  beforeEach(() => {
    render(<Menu {...mockProps} />)
  })
  it("menu is in the document", () => {
    const menu = screen.getByTestId("menu")
    expect(menu).toBeInTheDocument()
  })
  it("Home btn is in the document and calls scrollToTop on click", () => {
    const homeBtn = screen.getByText("Home")
    expect(homeBtn).toBeInTheDocument()
    act(() => {
      fireEvent.click(homeBtn)
    })
    expect(mockProps.setShowMenu).toHaveBeenCalledWith(false)
    expect(animateScroll.scrollToTop).toHaveBeenCalledWith({smooth: "true", duration: 500})
  })
  it("matches snapshot", () => {
    const menu = screen.getByTestId("menu")
    expect(menu).toMatchSnapshot()
  })
})