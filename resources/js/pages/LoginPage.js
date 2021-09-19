import React from "react";
import { useSelector, useDispatch  } from "react-redux";
import * as formValidator from "../utility/formValidator";
import InputFieldAlert from "../utilityComponents/InputFieldAlert";
import loginRequest from "../requests/loginRequest";
import {
    setEmail,
    setPassword,
} from "../redux/slices/loginFormSlice";

function LoginPage() {
    const dispatch = useDispatch();
    const { email, password } =
        useSelector((state) => state.loginForm);

    const emailChangeHandler = (e) => {
        dispatch(setEmail({
            errorMessage: formValidator.getEmailErrorMessage(e.target.value),
            value: e.target.value,
        }));
    };

    const passwordChangeHandler = (e) => {
        dispatch(setPassword({
            errorMessage: formValidator.getPasswordErrorMessage(e.target.value),
            value: e.target.value,
        }));
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
            loginRequest(buildRequest());
        }
    };

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
