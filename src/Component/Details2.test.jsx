import Details2 from "./Details2";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from "react";
import { MemoryRouter } from "react-router-dom";

jest.mock('react-router-dom', () => ({
    useNavigate: () => jest.fn(),
  }));

describe("Details2", () => {
    it("Heading", () => {
        render(<MemoryRouter><Details2  /></MemoryRouter>);
        const question1=screen.getByText(/View Hotal Details/i);
        expect(question1).toBeInTheDocument();
    });
    it("Card Name:", () => {
        render(<MemoryRouter><Details2  /></MemoryRouter>);
        const question2=screen.getByText(/Card Name:/i);
        expect(question2).toBeInTheDocument();
    });
    it("Discription:", () => {
        render(<MemoryRouter><Details2  /></MemoryRouter>);
        const question3=screen.getByText(/Discription:/i);
        expect(question3).toBeInTheDocument();
    });
    it("button Rent Me", () => {
        render(
            <MemoryRouter><Details2  /></MemoryRouter>
        );
        expect(screen.getByRole("button", { name: "Rent Me" })).toBeInTheDocument();
    });
});