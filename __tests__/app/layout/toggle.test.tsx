import ToggleSwitch from "@/app/layout/toggle";
import { render, act, fireEvent, screen } from "@testing-library/react";





describe("<ToggleSwitch />", () => {
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
  beforeEach(() => {
    render(<ToggleSwitch />)
  })
  it("toggle-switch is in the document", () => {
    const toggle = screen.getByTestId("toggle-switch")
    expect(toggle).toBeInTheDocument()
  })
  it("updates to dark mode on click", () => {
    const toggle = screen.getByTestId("toggle-switch")
    act(() => {
      fireEvent.click(toggle)
    })
    expect(window.matchMedia).toHaveBeenCalledWith("(prefers-color-scheme: dark)")
    act(() => {
      fireEvent.click(toggle)
    })
    expect(window.matchMedia).toHaveBeenCalledWith("(prefers-color-scheme: dark)")

  })
  it("matches snapshot", () => {
    const toggle = screen.getByTestId("toggle-switch")
    expect(toggle).toMatchSnapshot()
  })
})

