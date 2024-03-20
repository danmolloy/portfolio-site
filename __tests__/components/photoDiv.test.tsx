import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import PhotoDiv, { PhotoDivProps } from "@/components/photoDiv";

const mockProps: PhotoDivProps = {
  src: "/mock.jpg",
  height: 100,
  width: 100,
  alt: "mockAlt",
  title: "mockTitle",
  setShowImage: jest.fn()
}

describe("<PhotoDiv />", () => {
  beforeEach(() => {
    render(<PhotoDiv {...mockProps} />)
  })
  it("photo-div is in the document", () => {
    const photoDiv = screen.getByTestId("photo-div")
    expect(photoDiv).toBeInTheDocument()
  })
  it("close btn is in the document and calls setShowImage() on click", () => {
    const closeBtn = screen.getByText("Close")
    expect(closeBtn).toBeInTheDocument()
    act(() => {
      fireEvent.click(closeBtn)
    })
    expect(mockProps.setShowImage).toHaveBeenCalled()
  })
  it("img is in the document with expected attrs", async () => {
    await waitFor(() => {
      const img = screen.getByAltText(mockProps.alt)
      expect(img).toHaveAttribute('title', mockProps.title);
      expect(img).toHaveAttribute('width', String(mockProps.width));
      expect(img).toHaveAttribute('height', String(mockProps.height));
    });
  })
  it("title is in the document", () => {
    const title = screen.getByText(mockProps.title)
    expect(title).toBeInTheDocument()
  })
  it("matches snapshot", () => {
    const photoDiv = screen.getByTestId("photo-div")
    expect(photoDiv).toMatchSnapshot()
  })
})