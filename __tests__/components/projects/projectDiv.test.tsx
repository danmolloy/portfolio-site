import { act, fireEvent, render, screen } from "@testing-library/react";
import ProjectDiv from "@/components/projects/projectDiv";
import { ProjectDivProps, projectsArr } from "@/lib/projects";

const randInd = Math.floor(Math.random() * projectsArr.length)

const mockProps: ProjectDivProps = projectsArr[randInd]

describe("<ProjectDiv />", () => {
  beforeEach(() => {
    render(<ProjectDiv {...mockProps} />)
  })
  it("project-div is in the document", () => {
    const projectDiv = screen.getByTestId("project-div")
    expect(projectDiv).toBeInTheDocument()
  })
  it("project-header is in the document", () => {
    const projectHeader = screen.getByTestId("project-header")
    expect(projectHeader).toBeInTheDocument()
  })
  it("overview and stack are in the document", () => {
    const text = screen.getByTestId("project-text")
    expect(text).toBeInTheDocument()
    expect(text.textContent).toMatch(mockProps.overview[0])
    expect(text.textContent).toMatch(mockProps.stack[0])
  })
  it("features renders on features btn click, same with overview btn", () => {
    const featuresBtn = screen.getByText("Features")
    act(() => {
      fireEvent.click(featuresBtn)
    })
    const text = screen.getByTestId("project-text")
    expect(text.textContent).toMatch(mockProps.features[0])
    const overviewBtn = screen.getByText("Overview")
    act(() => {
      fireEvent.click(overviewBtn)
    })
    expect(text.textContent).toMatch(mockProps.overview[0])
  })
  it("project-images is in the document", () => {
    const projectImages = screen.getByTestId("project-images")
    expect(projectImages).toBeInTheDocument()
  })
  it("matches snapshot", () => {
    const projectDiv = screen.getByTestId("project-div")
    expect(projectDiv).toMatchSnapshot()
  })
})