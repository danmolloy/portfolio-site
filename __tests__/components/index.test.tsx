import IndexSection from "@/components";
import { render, screen } from "@testing-library/react";

describe("<IndexSection />", () => {
  beforeEach(() => {
    render(<IndexSection />)
  })
  it("index-section is in the document", () => {
    const indexSection = screen.getByTestId("index-section")
    expect(indexSection).toBeInTheDocument()
  })
  it("hero section is in the document", () => {
    const heroSection = screen.getByTestId("hero-section")
    expect(heroSection).toBeInTheDocument()
  })
  it("about section is in the document", () => {
    const aboutSection = screen.getByText("About")
    expect(aboutSection).toBeInTheDocument()
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