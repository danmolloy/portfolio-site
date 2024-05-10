import { render, screen } from "@testing-library/react";
import Recordings, { RecordingsProps } from "@/app/about/recordings";
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
  
})