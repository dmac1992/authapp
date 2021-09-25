import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as formValidator from "../utility/formValidator";
import InputFieldAlert from "../utilityComponents/InputFieldAlert";
import registerRequest from "../requests/registerRequest";
import { toggleLoadState } from "../redux/slices/loadingSlice";
import { setNotification } from "../redux/slices/notificationSlice";
import {
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setPasswordConfirmation,
} from "../redux/slices/regoFormSlice";

function RegistrationPage() {
    const dispatch = useDispatch();
    const { firstName, lastName, email, password, passwordConfirmation } =
        useSelector((state) => state.regoForm);

    const fnameChangeHandler = (e) => {
        dispatch(
            setFirstName({
                errorMessage: formValidator.getNameErrorMessage(
                    e.target.value,
                    "first"
                ),
                value: e.target.value,
            })
        );
    };

    const lnameChangeHandler = (e) => {
        dispatch(
            setLastName({
                errorMessage: formValidator.getNameErrorMessage(
                    e.target.value,
                    "last"
                ),
                value: e.target.value,
            })
        );
    };

    const emailChangeHandler = (e) => {
        dispatch(
            setEmail({
                errorMessage: formValidator.getEmailErrorMessage(
                    e.target.value
                ),
                value: e.target.value,
            })
        );
    };

    const passwordChangeHandler = (e) => {
        dispatch(
            setPassword({
                errorMessage: formValidator.getPasswordErrorMessage(
                    e.target.value
                ),
                value: e.target.value,
            })
        );
    };

    const passwordConfirmationChangeHandler = (e) => {
        dispatch(
            setPasswordConfirmation({
                errorMessage: formValidator.getPasswordConfirmationErrorMessage(
                    password.value,
                    e.target.value
                ),
                value: e.target.value,
            })
        );
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

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("rego submit handler");
        if (isFormValid()) {
            dispatch(toggleLoadState(true));
            const response = await registerRequest(buildRequest());
            dispatch(toggleLoadState(false));
            handleResponse(response);
        }
    };

    const handleResponse = (response) => {
        const { errors, notification, navigateTo } = response;

        if (errors) {
            handleFormErrors(errors);
        }

        if (notification) {
            dispatch(setNotification(notification));
        }

        if (navigateTo) {
            history.push(navigateTo);
        }
    };

    const handleFormErrors = (errors) => {
        if (errors.firstName) {
            dispatch(
                setFirstName({
                    ...firstName,
                    errorMessage: errors.firstName,
                })
            );
        }
        if (errors.lastName) {
            dispatch(
                setLastName({
                    ...lastName,
                    errorMessage: errors.lastName,
                })
            );
        }
        if (errors.email) {
            dispatch(
                setEmail({
                    ...email,
                    errorMessage: errors.email,
                })
            );
        }
        if (errors.password) {
            dispatch(
                setPassword({
                    ...password,
                    errorMessage: errors.password,
                })
            );
        }
        if (errors.passwordConfirmation) {
            dispatch(
                setPasswordConfirmation({
                    ...passwordConfirmation,
                    errorMessage: errors.passwordConfirmation,
                })
            );
        }
    };

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
