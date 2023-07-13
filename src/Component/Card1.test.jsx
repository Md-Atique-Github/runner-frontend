import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from "react";
import Card1 from './Card1';

jest.mock('react-router-dom', () => ({
    useNavigate: () => jest.fn(),
}));



describe("Card", () => {
    it("Car Name:", () => {
        render(<Card1 />);
        const question1=screen.getByText(/CAR NAME/i);
        expect(question1).toBeInTheDocument();
    });

    it("Short Description", () => {
        render(
            <Card1 />
        );
        expect(screen.getByRole("button", { name: "Rent Now" })).toBeInTheDocument();
    });
    it("Rent NOW!", () => {
        render(
            <Card1 />
        );
        const question1=screen.getByText(/Short Description: Unleash unrivaled power and elegance with the Bugatti Chiron Super Sport, a master piece of performance and luxury./i);
        expect(question1).toBeInTheDocument();
    });
});
