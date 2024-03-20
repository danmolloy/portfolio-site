import ImageTile, { ImageProps } from "@/components/imageTile";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";


const mockProps: ImageProps = {
  src: "/mockSrc.jpg",
  width: 100,
  height: 100,
  alt: "mock alt",
  title: "mock title",
  id: "mock id",
  setShowImage: jest.fn()
}

describe("<ImageTile />", () => {
  beforeEach(() => {
    render(<ImageTile {...mockProps} />)
  })
  it("image-tile is in the document", () => {
    const imgTile = screen.getByTestId("image-tile")
    expect(imgTile).toBeInTheDocument()
  })
  it("calls setShowImage on click", () => {
    const imgTile = screen.getByTestId("image-tile")
    act(() => {
      fireEvent.click(imgTile)
    })
    expect(mockProps.setShowImage).toHaveBeenCalled()
  })
  it("image is in the document with alt, width, height and title attrs", async () => {
    await waitFor(() => {
      const img = screen.getByAltText(mockProps.alt)
      expect(img).toHaveAttribute('title', mockProps.title);
      expect(img).toHaveAttribute('width', String(mockProps.width));
      expect(img).toHaveAttribute('height', String(mockProps.height));
    });
  })
})