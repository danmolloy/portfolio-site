import ProjectsSection, { ProjectsSectionProps } from "@/components/projects";
import { projectsArr } from "@/lib/projects";
import { render, screen } from "@testing-library/react";

const mockProps: ProjectsSectionProps = {
  stackArray: ["lorem", "ipsum"],
  projectsArr: projectsArr
}

describe("<ProjectsSection />", () => {
  beforeEach(() => {
    render(<ProjectsSection {...mockProps} />)
  })
  it("'Projects' title is in the document", () => {
    const title = screen.getByText("Projects")
    expect(title).toBeInTheDocument()
  })
  it("projects-section is in the document", () => {
    const projectsSection = screen.getByTestId("projects-section")
    expect(projectsSection).toBeInTheDocument()
  })
  it("all filters are in the document", () => {
    const filters = screen.getByTestId("filters-arr")
    for (let i = 0; i < mockProps.stackArray.length; i ++) {
      expect(filters.textContent).toMatch(mockProps.stackArray[i])
    }
  })
  it("all projects are in the document", () => {
    for (let i = 0; i < mockProps.projectsArr.length; i ++) {
      const project = screen.getByText(mockProps.projectsArr[i].title)
      expect(project).toBeInTheDocument()
    }
  })
  //it("matches snapshot", () => {})
})