import { act, fireEvent, render, screen } from "@testing-library/react";
import ProjectImages, { ProjectImagesProps } from "@/components/projects/images";

const mockProps: ProjectImagesProps = {
  images: [
    {imgSrc: "/mocksrc.jpg",
    imgWidth: "100",
    imgHeight: "100",
    imgAlt: "mockAlt"},
    {imgSrc: "/mocksrc2.jpg",
    imgWidth: "100",
    imgHeight: "100",
    imgAlt: "mockAlt2"},
  ]
}

describe("<ProjectImages />", () => {
  beforeEach(() => {
    render(<ProjectImages {...mockProps} />)
  })
  it("project-images is in the document", () => {
    const projectImages = screen.getByTestId("project-images")
    expect(projectImages).toBeInTheDocument()
  })
  it("first image is in the document", () => {
    const image = screen.getByAltText(mockProps.images[0].imgAlt)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src")
    expect(image).toHaveAttribute("width")
    expect(image).toHaveAttribute("height")
  })
  it("chevrons work as expected: render next img and diabled at end", async () => {
    const rightChevron = screen.getByTestId("right-chevron")
    expect(rightChevron).toBeInTheDocument()
    await act(async () => {
      await fireEvent.click(rightChevron)
      await new Promise(resolve => setTimeout(resolve, 300))
    })
    const image2 = screen.getByAltText(mockProps.images[1].imgAlt)
    expect(image2).toBeInTheDocument()
    await act(async () => {
      await fireEvent.click(rightChevron)
      await new Promise(resolve => setTimeout(resolve, 300))
    })
    expect(image2).toBeInTheDocument()
    const leftChevron = screen.getByTestId("left-chevron")
    expect(leftChevron).toBeInTheDocument()
    await act(async () => {
      await fireEvent.click(leftChevron)
      await new Promise(resolve => setTimeout(resolve, 300))
    })
    const image = screen.getByAltText(mockProps.images[0].imgAlt)
    expect(image).toBeInTheDocument()
    await act(async () => {
      await fireEvent.click(leftChevron)
      await new Promise(resolve => setTimeout(resolve, 300))
    })
    expect(image).toBeInTheDocument()
  })
  it("matches snapshot", () => {
    const projectImages = screen.getByTestId("project-images")
    expect(projectImages).toMatchSnapshot()
  })
})