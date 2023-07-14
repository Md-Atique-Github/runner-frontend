import Form3 from "./Form3";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from "react";
import { MemoryRouter } from "react-router-dom";


jest.mock('react-router-dom', () => ({
    useNavigate: () => jest.fn(),
  }));

describe("Form3", () => {
    it("Name", () => {
        render(<MemoryRouter><Form3  /></MemoryRouter>);
        const question1=screen.getByText(/Name/i);
        expect(question1).toBeInTheDocument();
    });
    it("Address", () => {
        render(<MemoryRouter><Form3  /></MemoryRouter>);
        const question2=screen.getByText(/Address/i);
        expect(question2).toBeInTheDocument();
    });
    it("Phone Number", () => {
        render(<MemoryRouter><Form3  /></MemoryRouter>);
        const question3=screen.getByText(/Phone Number/i);
        expect(question3).toBeInTheDocument();
    });
    it("Pick Date", () => {
        render(<MemoryRouter><Form3  /></MemoryRouter>);
        const question4=screen.getByText(/Pick Date/i);
        expect(question4).toBeInTheDocument();
    });
    it("Drop Date", () => {
        render(<Form3  />);
        const question5=screen.getByText(/Drop Date/i);
        expect(question5).toBeInTheDocument();
    });  
});