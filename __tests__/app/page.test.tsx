import Page from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("<Page />", () => {
  beforeEach(() => {
    render(<Page />)
  })

  it("hero section is in the document", () => {
    const heroSection = screen.getByTestId("hero-section")
    expect(heroSection).toBeInTheDocument()
  })
  it("project section is in the document with all projects", () => {
    const projectsSection = screen.getByText("Projects")
    expect(projectsSection).toBeInTheDocument()
  })
  it("contact section is in the document", () => {
    const contactSection = screen.getByText("Contact")
    expect(contactSection).toBeInTheDocument()
  })
  it("matches snapshot", () => {
    const indexSection = screen.getByTestId("index-section")
    expect(indexSection).toMatchSnapshot()
  })
})