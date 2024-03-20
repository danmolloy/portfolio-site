import { projectsArr } from "@/lib/projects";
import { act, fireEvent, render, screen } from "@testing-library/react";
import ProjectHeader, { ProjectHeaderProps } from "@/components/projects/header";

const mockProps: ProjectHeaderProps = {
  title: "mockTitle",
  githubLink: "githubLink",
  previewLink: "mockLink",
  selectedTab: 0,
  setSelectedTab: jest.fn()
}

describe("<ProjectHeader />", () => {
  beforeEach(() => {
    render(<ProjectHeader {...mockProps} />)
  })
  it("project-header is in the document", () => {
    const projectHeader = screen.getByTestId("project-header")
    expect(projectHeader).toBeInTheDocument()
  })
  it("project title is in the document", () => {
    const title = screen.getByText(mockProps.title)
    expect(title).toBeInTheDocument()
  })
  it("github link is in the document with expected attrs", () => {
    const githubLink = screen.getByTestId("github-link")
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute("href", mockProps.githubLink)
    expect(githubLink).toHaveAttribute("target", "_blank")
  })
  it("preview link is in the document with expected attrs", () => {
    const previewLink = screen.getByTestId("example-link")
    expect(previewLink).toBeInTheDocument()
    expect(previewLink).toHaveAttribute("href", mockProps.previewLink)
    expect(previewLink).toHaveAttribute("target", "_blank")
  })
  it("overview button call setSelectedTab with expected arg", () => {
    const overviewBtn = screen.getByText("Overview")
    act(() => {
      fireEvent.click(overviewBtn)
    })
    expect(mockProps.setSelectedTab).toHaveBeenCalledWith(0)
  })
  it("features button call setSelectedTab with expected arg", () => {
    const featuresBtn = screen.getByText("Features")
    act(() => {
      fireEvent.click(featuresBtn)
    })
    expect(mockProps.setSelectedTab).toHaveBeenCalledWith(1)
  })
})