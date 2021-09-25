import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import { Route, HashRouter, Switch } from "react-router-dom";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import Notification from "../utilityComponents/Notification.js";
import LoadingScreen from "../pages/LoadingScreen.js";
import { Provider } from "react-redux";
import store from "../redux/store";
import { useHistory } from "react-router-dom";

function Index() {
    const history = useHistory();
    // passing second param of empty array ensures first callback argument
    // runs during initial render of application and never again.
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        if (queryParams.get("notification")) {
            // setNotification(queryParams.get("notification"));
        }
        if (queryParams.get("navigateTo")) {
            history.push(`/${queryParams.get("navigateTo")}`);
        }
        //TODO - clean up browser url
    }, []);

    return (
        <div className="container">
            <Header />
            <Notification />
            <LoadingScreen />
            <div id="pageContent">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route
                        exact
                        path="/register"
                        component={RegistrationPage}
                    />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/dashboard" component={DashboardPage} />
                </Switch>
            </div>
        </div>
    );
}
export default Index;

if (document.getElementById("application")) {
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <Index />
            </HashRouter>
        </Provider>,
        document.getElementById("application")
    );
}
