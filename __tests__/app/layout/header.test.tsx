import Header from "@/app/layout/header";
import { render, screen } from '@testing-library/react'

const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  length: 0, 
  clear: jest.fn(), 
  key: jest.fn(), 
};

window.localStorage = mockLocalStorage; // Mock localStorage behavior

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("<Header />", () => {
  beforeEach(() => {
    render(<Header />)
  })
  it("header is in the document", () => {
    const header = screen.getByTestId("header")
    expect(header).toBeInTheDocument()
  })
  it('name is in the document and calls scrollToTop on click', () => {
    const homeBtn = screen.getByText("Daniel Molloy")
    expect(homeBtn).toBeInTheDocument()
    expect(homeBtn).toHaveAttribute("href", "/")
  })
  it("toggle is in the document a", () => {
    const toggle = screen.getByTestId("toggle-switch")
    expect(toggle).toBeInTheDocument()
  })
})