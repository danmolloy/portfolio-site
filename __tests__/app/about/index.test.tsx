import AboutSection from "@/app/about";
import { aboutData } from "@/lib/about";
import { render, screen } from "@testing-library/react";

describe("<AboutSection />", () => {
  beforeEach(() => {
    render(<AboutSection />)
  })
  it("about-section is in the document", () => {
    const aboutSection = screen.getByTestId("about-section")
    expect(aboutSection).toBeInTheDocument()
  })
  it("title 'About' is in the document", () => {
    const aboutTitle = screen.getByText("About")
    expect(aboutTitle).toBeInTheDocument()
  })
  it("all snippets are in the document", () => {
    for (let i = 0; i < aboutData.snippets.length; i++) {
      const snippet = screen.getByText(aboutData.snippets[i])
      expect(snippet).toBeInTheDocument()
    }
  })
  it("<Ensembles /> is in the document", () => {
    const ensembles = screen.getByTestId("ensembles-section")
    expect(ensembles).toBeInTheDocument()
  })
  it("<Recordings /> is in the document", () => {
    const recordings = screen.getByTestId("recordings-section")
    expect(recordings).toBeInTheDocument()
  })
})