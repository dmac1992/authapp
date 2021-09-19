import  store  from '../redux/store';
import {  toggleLoading } from '../redux/slices/loadingSlice';
import { setNotification} from '../redux/slices/notificationSlice';
import { setUser } from '../redux/slices/userSlice';
import {
    setEmail,
    setPassword,
} from "../redux/slices/loginFormSlice";

const loginRequest = async (payload) => {

    store.dispatch(toggleLoading(true));

    const response =  await fetch("/api/auth/login", {
        body: payload,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const { notification, user, errors } = await response.json();

    if (errors) {
        handleFormErrors(errors);
    }

    store.dispatch(setNotification(notification));
    store.dispatch(toggleLoading(false));
    console.log('setting user to: ' + user.firstName);
    store.dispatch(setUser(user))

}

const handleFormErrors = (errors) => {
    const { email, password } =
        store.getState().loginForm;

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
};

export default loginRequest;