import React, { useState } from "react";
import * as formValidator from "../utility/formValidator";
import InputFieldAlert from "../commonComponents/InputFieldAlert";

function RegistrationPage() {
    const [firstName, setFirstName] = useState({
        value: "",
        errorMessage: null,
    });
    const [lastName, setLastName] = useState({
        value: "",
        errorMessage: null,
    });
    const [email, setEmail] = useState({
        value: "",
        errorMessage: null,
    });
    const [password, setPassword] = useState({
        value: "",
        errorMessage: null,
    });
    const [passwordConfirmation, setPasswordConfirmation] = useState({
        value: "",
        errorMessage: null,
    });

    const fnameChangeHandler = (e) => {
        setFirstName({
            errorMessage: formValidator.getNameErrorMessage(
                e.target.value,
                "first"
            ),
            value: e.target.value,
        });
    };

    const lnameChangeHandler = (e) => {
        setLastName({
            errorMessage: formValidator.getNameErrorMessage(
                e.target.value,
                "last"
            ),
            value: e.target.value,
        });
    };

    const emailChangeHandler = (e) => {
        setEmail({
            errorMessage: formValidator.getEmailErrorMessage(e.target.value),
            value: e.target.value,
        });
    };

    const passwordChangeHandler = (e) => {
        setPassword({
            errorMessage: formValidator.getPasswordErrorMessage(e.target.value),
            value: e.target.value,
        });
    };

    const passwordConfirmationChangeHandler = (e) => {
        setPasswordConfirmation({
            errorMessage: formValidator.getPasswordConfirmationErrorMessage(
                password.value,
                e.target.value
            ),
            value: e.target.value,
        });
    };

    const isFormValid = () => {
        return (
            firstName.errorMessage ||
            lastName.errorMessage ||
            email.errorMessage ||
            password.errorMessage ||
            passwordConfirmation.errorMessage
        )
            ? false
            : true;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            alert("sending form!");
        } else {
            //focus first field
            alert("form failed validation");
        }
    };
    return (
        <form className="rego" onSubmit={submitHandler}>
            <label id="regoFnameLabel" className="rego-label">
                First name:
            </label>
            <input
                id="regoFnameField"
                className="rego-field"
                onChange={fnameChangeHandler}
                value={firstName.value}
            />
            {firstName.errorMessage && (
                <InputFieldAlert message={firstName.errorMessage} />
            )}
            <label id="regoLnameLabel" className="rego-label">
                Last name:
            </label>
            <input
                id="regoLnameField"
                className="rego-field"
                onChange={lnameChangeHandler}
                value={lastName.value}
            />
            {lastName.errorMessage && (
                <InputFieldAlert message={lastName.errorMessage} />
            )}
            <label id="regoEmailLabel" className="rego-label">
                Email:
            </label>
            <input
                id="regoEmailField"
                className="rego-field"
                value={email.value}
                onChange={emailChangeHandler}
            />
            {email.errorMessage && (
                <InputFieldAlert message={email.errorMessage} />
            )}
            <label id="regoPasswordLabel" className="rego-label">
                Password:
            </label>
            <input
                id="regoPasswordField"
                className="rego-field"
                value={password.value}
                onChange={passwordChangeHandler}
            />
            {password.errorMessage && (
                <InputFieldAlert message={password.errorMessage} />
            )}
            <label id="regoPasswordConfirmLabel" className="rego-label">
                Confirm Password:
            </label>
            <input
                id="regoPasswordConfirmField"
                className="rego-field"
                value={passwordConfirmation.value}
                onChange={passwordConfirmationChangeHandler}
            />
            {passwordConfirmation.errorMessage && (
                <InputFieldAlert message={passwordConfirmation.errorMessage} />
            )}
            <button>submit form</button>
        </form>
    );
}

export default RegistrationPage;
