import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import RegisterPage from "./RegistrationPage";
import React from "react";

describe("Testing RegisterForm component", () => {
    test("renders register component", () => {
        render(<RegisterPage />);
        const header = screen.getByText("REGISTERFORM");
        expect(header).toBeInTheDocument();
    });
});
