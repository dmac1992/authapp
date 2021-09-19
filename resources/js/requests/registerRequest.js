import store from "../redux/store";
import { toggleLoading } from "../redux/slices/loadingSlice";
import { setNotification } from "../redux/slices/notificationSlice";
import {
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setPasswordConfirmation,
} from "../redux/slices/regoFormSlice";

const registrationRequest = async (payload) => {
    console.log("making rego request");
    store.dispatch(toggleLoading(true));

    const response = await fetch("/api/auth/register", {
        body: payload,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const { notification, errors } = await response.json();

    if (errors) {
        handleFormErrors(errors);
    }

    store.dispatch(setNotification(notification));
    store.dispatch(toggleLoading(false));
};

const handleFormErrors = (errors) => {
    const { firstName, lastName, email, password, passwordConfirmation } =
        store.getState().regoForm;

    if (errors.firstName) {
        store.dispatch(
            setFirstName({
                ...firstName,
                errorMessage: errors.firstName,
            })
        );
    }
    if (errors.lastName) {
        store.dispatch(
            setLastName({
                ...lastName,
                errorMessage: errors.lastName,
            })
        );
    }
    if (errors.email) {
        store.dispatch(
            setEmail({
                ...email,
                errorMessage: errors.email,
            })
        );
    }
    if (errors.password) {
        store.dispatch(
            setPassword({
                ...password,
                errorMessage: errors.password,
            })
        );
    }
    if (errors.passwordConfirmation) {
        store.dispatch(
            setPasswordConfirmation({
                ...passwordConfirmation,
                errorMessage: errors.passwordConfirmation,
            })
        );
    }
};

export default registrationRequest;
