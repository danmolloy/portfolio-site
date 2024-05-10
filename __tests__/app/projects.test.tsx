import Projects from "@/app/projects";
import { projectsArr } from "@/lib/projects";
import { render, screen } from "@testing-library/react";


describe("<ProjectsSection />", () => {
  beforeEach(() => {
    render(<Projects />)
  })
  it("'Projects' title is in the document", () => {
    const title = screen.getByText("Projects")
    expect(title).toBeInTheDocument()
  })
  it("projects-section is in the document", () => {
    const projectsSection = screen.getByTestId("projects-section")
    expect(projectsSection).toBeInTheDocument()
  })

  it("all projects are in the document with all expected values", () => {
    for (let i = 0; i < projectsArr.length; i ++) {
      const project = screen.getByTestId(`project-${projectsArr[i].id}`)
      expect(project).toBeInTheDocument()
      expect(project.textContent).toMatch(projectsArr[i].blurb)
      expect(project.innerHTML).toMatch(projectsArr[i].githubLink)
      expect(project.innerHTML).toMatch(projectsArr[i].previewLink)
    }
  })
  it("matches snapshot", () => {
    const projectsSection = screen.getByTestId("projects-section")
    expect(projectsSection).toMatchSnapshot()
  })
})