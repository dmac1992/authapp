import React, { useState } from "react";
import * as formValidator from "../utility/formValidator";
import InputFieldAlert from "../utilityComponents/InputFieldAlert";
import registerRequest from "../requests/registerRequest";

function RegistrationPage(props) {
    const [firstName, setFirstName] = useState({
        value: "daniel",
        errorMessage: null,
    });
    const [lastName, setLastName] = useState({
        value: "mccarthy",
        errorMessage: null,
    });
    const [email, setEmail] = useState({
        value: "dmccarthy2012@hotmail.co.uk ",
        errorMessage: null,
    });
    const [password, setPassword] = useState({
        value: "Bogheads16!",
        errorMessage: null,
    });
    const [passwordConfirmation, setPasswordConfirmation] = useState({
        value: "Bogheads16!",
        errorMessage: null,
    });
    const [isLoading, setIsLoading] = useState(false);

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
        return firstName.errorMessage ||
            lastName.errorMessage ||
            email.errorMessage ||
            password.errorMessage ||
            passwordConfirmation.errorMessage
            ? false
            : true;
    };

    const buildRequest = () => {
        return JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
            passwordConfirmation: passwordConfirmation.value,
        });
    };

    const submitHandler = async(e) => {
        e.preventDefault();
        if (isFormValid()) {
            setIsLoading(true);
            const payload = await registerRequest(buildRequest());
            handleResponse(payload);
            setIsLoading(false);
        } else {
            //focus first field
            alert("form failed validation");
        }
    };

    const handleResponse = (payload) => {
        console.log(payload);
        console.log(payload.notification);
        if (payload.notification) {
            console.log("setting notify")
            props.setNotification(payload.notification);
            return
        }
        console.log("didnt setNotify")
        return;
    };

    if (isLoading) {
        return <h1>Loading . . .</h1>;
    }

    return (
        <form className="rego" onSubmit={submitHandler}>
            <h3>Registration Form</h3>
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
            <button>Register</button>
        </form>
    );
}

export default RegistrationPage;
