import Details2 from "./Details2";

describe("Details2", () => {
    it("Heading", () => {
        render(<Details2  />);
        const question1=screen.getByText(/View Hotal Details/i);
        expect(question1).toBeInTheDocument();
    });
    it("Card Name:", () => {
        render(<Details2  />);
        const question2=screen.getByText(/Card Name:/i);
        expect(question2).toBeInTheDocument();
    });
    it("Discription:", () => {
        render(<Details2 />);
        const question3=screen.getByText(/Discription:/i);
        expect(question3).toBeInTheDocument();
    });
    it("button Rent Me", () => {
        render(
            <Details2 />
        );
        expect(screen.getByRole("button", { name: "Rent Me" })).toBeInTheDocument();
    });
});