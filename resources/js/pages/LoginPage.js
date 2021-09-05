import React, { useState } from "react";
import * as formValidator from "../utility/formValidator";
import InputFieldAlert from "../utilityComponents/InputFieldAlert";

function LoginPage() {
    const [email, setEmail] = useState({
        value: "",
        errorMessage: null,
    });
    const [password, setPassword] = useState({
        value: "",
        errorMessage: null,
    });
    const [isLoading, setIsLoading] = useState(false);

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

    const isFormValid = () => email.errorMessage || password.errorMessage ? false : true;

    const buildRequest = () => {
        return JSON.stringify({
            email: email.value,
            password: password.value,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            setIsLoading(true);
            fetch("/api/auth/login", {
                body: buildRequest(),
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    //global state = page / user
                    //navigate page based on global state
                    console.log(data);
                })
                .catch();
            setIsLoading(false);
        } else {
            //todo - focus first field
            alert("form failed validation");
        }
    };

    const handleResponse = (data) => {};

    if (isLoading) {
        return <h1>Loading . . .</h1>;
    }

    return (
        <form className="login-form" onSubmit={submitHandler}>
            <h1>Login Form</h1>
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
            <button>login</button>
        </form>
    );
}

export default LoginPage;
