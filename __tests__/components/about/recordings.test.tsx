import { act, fireEvent, render, screen } from "@testing-library/react";
import Recordings, { RecordingsProps } from "@/components/about/recordings";
import { soundtracks } from "@/lib/soundtracks";

const mockProps: RecordingsProps = {
  recordings: soundtracks
}

describe("<Recordings />", () => {
  beforeEach(() => {
    render(<Recordings {...mockProps} />)
  })
  it("recordings-section is in the document", () => {
    const recordingsSection = screen.getByTestId("recordings-section")
    expect(recordingsSection).toBeInTheDocument()
  })
  it("all recordings pics are in the document", () => {
    for (let i = 0; i < mockProps.recordings.length; i ++) {
      const recording = screen.getByAltText(mockProps.recordings[i].title)
      expect(recording).toBeInTheDocument()
    }
  })
  it("scroll left btn is in the document", () => {
    const scrollLeft = screen.getByTestId("scroll-left")
    expect(scrollLeft).toBeInTheDocument()
  })
  it("scroll right btn is in the document", () => {
    const scrollRight = screen.getByTestId("scroll-right")
    expect(scrollRight).toBeInTheDocument()
  })
})