import {
    getNameErrorMessage,
    getEmailErrorMessage,
    getPasswordErrorMessage,
    getPasswordConfirmationErrorMessage,
} from "./formValidator";

describe("testing first name validation", () => {
    test("getNameErrorMessage invalid name type throws exception", () => {
        expect(() => {
            getNameErrorMessage("daniel", "donkey");
        }).toThrow('validateName expects a type argument of "first" or "last"');
    });

    test("getNameErrorMessage test empty first name input", () => {
        expect(getNameErrorMessage("", "first")).toMatch(
            "first name is required, please enter one"
        );
    });

    test("getNameErrorMessage test first name too short", () => {
        expect(getNameErrorMessage("da", "first")).toMatch(
            "first name is too short! please enter a longer one"
        );
    });

    test("getNameErrorMessage test first name too long", () => {
        expect(getNameErrorMessage("a".repeat(15), "first")).toMatch(
            "first name is too long! please enter a shorter one"
        );
    });

    test("getNameErrorMessage test first name with non-alphabetical characters", () => {
        expect(getNameErrorMessage("daniel23$", "first")).toMatch(
            "first name contains invalid characters, please use alphabetical characters only"
        );
    });
});

describe("testing last name field validation", () => {
    test("getNameErrorMessage test empty last name input", () => {
        expect(getNameErrorMessage("", "last")).toMatch(
            "last name is required, please enter one"
        );
    });

    test("getNameErrorMessage test last name too short", () => {
        expect(getNameErrorMessage("da", "last")).toMatch(
            "last name is too short! please enter a longer one"
        );
    });

    test("getNameErrorMessage test last name too long", () => {
        expect(getNameErrorMessage("a".repeat(15), "last")).toMatch(
            "last name is too long! please enter a shorter one"
        );
    });

    test("getNameErrorMessage test last name with non-alphabetical characters", () => {
        expect(getNameErrorMessage("daniel23$", "last")).toMatch(
            "last name contains invalid characters, please use alphabetical characters only"
        );
    });
});

describe("testing email field validation", () => {
    test("getEmailErrorMessage test empty email input", () => {
        expect(getEmailErrorMessage("")).toMatch(
            "email is required, please enter one"
        );
    });

    test("getEmailErrorMessage rejects invalid email", () => {
        expect(getEmailErrorMessage("thisisnotanemail123")).toMatch(
            "email is invalid! please enter a valid email address"
        );
    });
});

describe("testing password field validation", () => {
    test("getPasswordErrorMessage test empty password input", () => {
        expect(getPasswordErrorMessage("")).toMatch(
            "password is required, please enter one"
        );
    });

    test("getPasswordErrorMessage test password input too short", () => {
        expect(getPasswordErrorMessage("abc")).toMatch(
            "password is too short!, should be between 7 and 30 characters"
        );
    });

    test("getPasswordErrorMessage test password input too long", () => {
        expect(getPasswordErrorMessage("a".repeat(31))).toMatch(
            "password is too long!, should be between 7 and 30 characters"
        );
    });

    describe("getPasswordErrorMessage password field character combination restraints", () => {
        test("getPasswordErrorMessage test password without at least one numeric character", () => {
            expect(getPasswordErrorMessage("aaaBBB#####")).toMatch(
                "password must contain a combination of alphabetical, numeric and special characters"
            );
        });

        test("getPasswordErrorMessage test password without at least one lower case character", () => {
            expect(getPasswordErrorMessage("AAAA###3333")).toMatch(
                "password must contain a combination of alphabetical, numeric and special characters"
            );
        });

        test("getPasswordErrorMessage test password without at least one upper case character", () => {
            expect(getPasswordErrorMessage("ab#2aaaaa")).toMatch(
                "password must contain a combination of alphabetical, numeric and special characters"
            );
        });

        test("getPasswordErrorMessage test password without at least one digit", () => {
            expect(getPasswordErrorMessage("aA#abcd$")).toMatch(
                "password must contain a combination of alphabetical, numeric and special characters"
            );
        });
    });
    describe("testing password confirmation field validation", () => {
        test("getPasswordConfirmationErrorMessage test empty input", () => {
            expect(getPasswordConfirmationErrorMessage("sdfsdf@sdf2", "")).toMatch(
                "password confirmation is required, please enter one"
            );
        });

        test("getPasswordConfirmationErrorMessage test empty input", () => {
            expect(getPasswordConfirmationErrorMessage("sdf@21Ab44", "doesntMatch123#")).toMatch(
                "password confirmation must be identical to your password"
            );
        });
    });
});
