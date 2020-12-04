import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const header = screen.getByText(/checkout form/i)

    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

    const fnInput = screen.getByLabelText(/first name/i)
    const lnInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    userEvent.type(fnInput, "Corey")
    userEvent.type(lnInput, "Power")
    userEvent.type(addressInput, "1 Street Rd")
    userEvent.type(cityInput, "Somecity")
    userEvent.type(stateInput, "Somestate")
    userEvent.type(zipInput, "12345")

    const button = screen.getByRole("button")

    userEvent.click(button)

    const output = await screen.findByText(/woo-hoo/i)

    expect(output).toBeInTheDocument()
});
