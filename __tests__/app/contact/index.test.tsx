import { render, screen, fireEvent, act, waitFor } from "@testing-library/react"
import ContactSection from "@/app/contact";
import axios from "axios"

const mockPost = jest.spyOn(axios, 'post');


/* jest.mock("axios", () => ({
  axios: {
    post: jest.fn()
  }
})) */

describe("<ContactSection />", () => {
  beforeEach(() => {
    render(<ContactSection />)
  })
  it("contact-form is in the document", () => {
    const contactForm = screen.getByTestId("contact-form")
    expect(contactForm).toBeInTheDocument()
  })
  it("'Contact' title is in the document", () => {
    const contactTitle = screen.getByText("Contact")
    expect(contactTitle).toBeInTheDocument()
  })


  it("name input is in the document with label, type and name attrs", () => {
    const nameInput = screen.getByLabelText("Name")
    expect(nameInput).toBeInTheDocument()
    expect(nameInput).toHaveAttribute("name", "name")
    expect(nameInput).toHaveAttribute("type", "text")
  })
  it("email input is in the document with label, type and name attrs", () => {
    const emailInput = screen.getByLabelText("Email")
    expect(emailInput).toBeInTheDocument()
    expect(emailInput).toHaveAttribute("name", "email")
    expect(emailInput).toHaveAttribute("type", "email")
  })
  it("message input is in the document with label, name, type & maxLength attrs", () => {
    const messageInput = screen.getByLabelText("Message")
    expect(messageInput).toBeInTheDocument()
    expect(messageInput).toHaveAttribute("name", "message")
    expect(messageInput).toHaveAttribute("type", "textarea")
    expect(messageInput).toHaveAttribute("maxLength", "500")
  })
  it("Submit btn is in the document", () => {
    const submitBtn = screen.getByText("Submit")
    expect(submitBtn).toBeInTheDocument()
  })
  it("err messages for name, email and message render on submit btn click", async () => {
    const submitBtn = screen.getByText("Submit")
    await act(async () => 
      await fireEvent.click(submitBtn)
    )
    const nameErr = screen.getByText("name required")
    expect(nameErr).toBeInTheDocument()
    const emailErr = screen.getByText("email required")
    expect(emailErr).toBeInTheDocument()
    const messageErr = screen.getByText("message required")
    expect(messageErr).toBeInTheDocument()
    expect(mockPost).not.toHaveBeenCalled()
  })
  it("calls axios.post(args) on submit with expect 'Sending..' and 'Success' messages", async () => {
    const nameInput = screen.getByLabelText("Name")
    const fakeName = "Joe Bloggs"
    const fakeEmail = "joe@bloggs.com.au"
    const fakeMsg = "Lorem Ipsum"
    act(() => {
      fireEvent.change(nameInput, {target: { value: fakeName}})
    })
    const emailInput = screen.getByLabelText("Email")
    act(() => {
      fireEvent.change(emailInput, {target: { value: fakeEmail}})
    })
    const messageInput = screen.getByLabelText("Message")
    act(() => {
      fireEvent.change(messageInput, {target: { value: fakeMsg}})
    })
    const submitBtn = screen.getByText("Submit")
    await act(async () => {
      await fireEvent.click(submitBtn)
    })
    const contactForm = screen.getByTestId("contact-form")

    expect(contactForm.textContent).toMatch("sending...")
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
    })

    expect(mockPost).toHaveBeenCalledWith("/api", {
      name: fakeName,
      email: fakeEmail,
      message: fakeMsg
    })

  })
  it("matches snapshot", () => {
    const contactForm = screen.getByTestId("contact-form")
    expect(contactForm).toMatchSnapshot()
  }) 
  
})