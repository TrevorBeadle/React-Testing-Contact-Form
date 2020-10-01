import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("Testing Contact Form", () => {
  test("contact form renders without errors", () => {
    render(<ContactForm />);
  });

  test("if form can be filled out", async () => {
    // Arrange
    render(<ContactForm />);

    // Act
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submit = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(firstNameInput, {
      target: { name: "firstName", value: "Trevor" },
    });

    fireEvent.change(lastNameInput, {
      target: { name: "lastName", value: "Trevor" },
    });
    fireEvent.change(emailInput, {
      target: { name: "email", value: "Trevor" },
    });
    fireEvent.change(messageInput, {
      target: { name: "message", value: "Trevor" },
    });

    // Assert
  });
});
