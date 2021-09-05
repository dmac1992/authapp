import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import { Route, HashRouter, Switch } from "react-router-dom";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import Notification from "../utilityComponents/Notification.js";

function Index() {
    const [notification, setNotification] = useState("");

    return (
        <div className="container">
            <Header />
            {notification ? <Notification notification={notification} /> : null}
            <div id="pageContent">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route
                        exact
                        path="/register"
                        render={() => (
                            <RegistrationPage
                                setNotification={setNotification}
                            />
                        )}
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
        <HashRouter history={history}>
            <Index />
        </HashRouter>,
        document.getElementById("application")
    );
}
