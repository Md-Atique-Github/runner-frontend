import Checkout4 from "./Checkout4";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from "react";


jest.mock('react-router-dom', () => ({
    useNavigate: () => jest.fn(),
  }));

describe("Checkout4", () => {
    it("Thank You:", () => {
        render(<Checkout4 />);
        const question1=screen.getByText(/Thank You/i);
        expect(question1).toBeInTheDocument();
    });
    it("button Start Over", () => {
        render(
            <Checkout4 />
        );
        expect(screen.getByRole("button", { name: "Start Over" })).toBeInTheDocument();
    });
});