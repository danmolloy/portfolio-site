import { act, fireEvent, render, screen } from "@testing-library/react";
import Ensembles, { EnsembleProps } from "@/app/about/ensembles";
import { aboutData } from "@/lib/about";

const mockProps: EnsembleProps = {
  ensembles: aboutData.orchestras
}

describe("<Ensembles />", () => {
  beforeEach(() => {
    render(<Ensembles {...mockProps} />)
  })
  it("ensembles-section is in the document", () => {
    const ensemblesSection = screen.getByTestId("ensembles-section")
    expect(ensemblesSection).toBeInTheDocument()
  })
  it("first four are in the document with name & favicon", () => {
    const slicedList = aboutData.orchestras.slice(0, 4)
    const ensemblesSection = screen.getByTestId("ensembles-section")

    for (let i = 0; i < slicedList.length; i++) {
      const orchestra = screen.getByText(slicedList[i].name)
      expect(orchestra).toBeInTheDocument()
      const favicon = screen.getByTitle(`${slicedList[i].name}-logo`)
      expect(favicon).toBeInTheDocument()
    }
  })
  it("show more/less button is in the document and shows all orchestras on click", async () => {
    const showBtn = screen.getByTestId("show-btn")
    expect(showBtn).toBeInTheDocument()
    expect(showBtn.textContent).toMatch("Show more")


    await act(async () => {
      await fireEvent.click(showBtn)
    })
    for (let i = 0; i < aboutData.orchestras.length; i++) {
      const orchestra = screen.getByText(aboutData.orchestras[i].name)
      expect(orchestra).toBeInTheDocument()
      const favicon = screen.getByTitle(`${aboutData.orchestras[i].name}-logo`)
      expect(favicon).toBeInTheDocument()
    }
    const showLessBtn = screen.getByText("Show less")
    expect(showLessBtn).toBeInTheDocument()
    await act(async () => {
      await fireEvent.click(showLessBtn)
    })
    expect(showBtn.textContent).toMatch("Show more")

    const ensemblesSection = screen.getByTestId("ensembles-section")
    expect(ensemblesSection.textContent).not.toMatch(aboutData.orchestras[6].name)
  })
})