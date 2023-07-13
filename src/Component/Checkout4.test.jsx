import Checkout4 from "./Checkout4";

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