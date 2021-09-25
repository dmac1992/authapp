import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logoutRequest from "../requests/logoutRequest";
import {  toggleLoadState } from '../redux/slices/loadingSlice';
import { setNotification} from '../redux/slices/notificationSlice';
import { removeUser } from '../redux/slices/userSlice';
import { useHistory } from "react-router-dom";

const Header = () => {

    const { firstName, lastName, email } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const history = useHistory();

    const logoutHandler = async (e) => {
        e.preventDefault();
        dispatch(toggleLoadState(true));
        const response = await logoutRequest();
        dispatch(toggleLoadState(false));
        handleLogoutResponse(response);
    }

    const handleLogoutResponse = (response) => {

        const { notification, navigateTo } = response;

        dispatch(removeUser());

        if (notification) {
            dispatch(setNotification(notification));
        }

        if (navigateTo) {
            history.push(navigateTo);
        }
    }

    return (
        <header id="header">
            <nav id="navigation">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {firstName &&
                        <>
                            <li>
                                <Link to="/Dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <a onClick={logoutHandler} href="#">
                                    Logout
                                </a>
                            </li>
                        </>
                    }
                    {!firstName &&
                        <>
                            <li>
                                <Link to="/Register">Register</Link>
                            </li>
                            <li>
                                <Link to="/Login">Login</Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
};
export default Header;
