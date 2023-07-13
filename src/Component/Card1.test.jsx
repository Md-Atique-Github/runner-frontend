import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from "react";
import Card1 from './Card1';

jest.mock('react-router-dom', () => ({
    useNavigate: () => jest.fn(),
}));



describe("MiniCard", () => {
    test("Car Name:", () => {
        render(<Card1 />);
        const question1=screen.getByText(/Car Name:/);
        expect(question1).toBeInTheDocument();
    });

    it("Rent NOW!", () => {
        render(
            <Card1 />
        );
        expect(screen.getByRole("button", { name: "Rent Now" })).toBeInTheDocument();
    });
});
