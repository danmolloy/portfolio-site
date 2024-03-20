import Layout, { LayoutProps } from "@/components/layout";
import { act, fireEvent, render, screen } from "@testing-library/react";

const mockProps: LayoutProps = {
  children: <div data-testid="children" />
}

describe("<Layout />", () => {
  beforeEach(() => {
    render(<Layout {...mockProps} />)
  })
  it("layout is in the document", () => {
    const layout = screen.getByTestId("layout")
    expect(layout).toBeInTheDocument()
  })
  it("<Header /> is in the document", () => {
    const header = screen.getByTestId("header")
    expect(header).toBeInTheDocument()
  })
  it("menu is shown on icon click", () => {
    const menuIcon = screen.getByTestId("menu-icon")
    act(() => {
      fireEvent.click(menuIcon)
    })
    const menu = screen.getByTestId("menu")
    expect(menu).toBeInTheDocument()
  })
  it("{children} is in the document", () => {
    const children = screen.getByTestId("children")
    expect(children).toBeInTheDocument()
  })
  it("<Footer /> is in the document", () => {
    const footer = screen.getByTestId("footer")
    expect(footer).toBeInTheDocument()
  })
  it("matches snapshot", () => {
    const layout = screen.getByTestId("layout")
    expect(layout).toBeInTheDocument()
  })

})