import Form3 from "./Form3";

describe("Form3", () => {
    it("Name", () => {
        render(<Form3  />);
        const question1=screen.getByText(/Name/i);
        expect(question1).toBeInTheDocument();
    });
    it("Address", () => {
        render(<Form3  />);
        const question2=screen.getByText(/Address/i);
        expect(question2).toBeInTheDocument();
    });
    it("Phone Number", () => {
        render(<Form3  />);
        const question3=screen.getByText(/Phone Number/i);
        expect(question3).toBeInTheDocument();
    });
    it("Pick Date", () => {
        render(<Form3  />);
        const question4=screen.getByText(/Pick Date/i);
        expect(question4).toBeInTheDocument();
    });
    it("Drop Date", () => {
        render(<Form3  />);
        const question5=screen.getByText(/Drop Date/i);
        expect(question5).toBeInTheDocument();
    });  
});