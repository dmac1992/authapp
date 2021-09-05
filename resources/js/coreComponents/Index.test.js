import { render, screen } from "@testing-library/react";
import Index from "./Index";

describe("Testing Index (root) component", () => {
    test("renders application header component", () => {
        render(<Index />);
        const header = screen.getByText("authapp");
        // expect(header).toBeInTheDocument();
        // expect(header).toContainHTML("<h1>authapp</h1>");
    });
});
