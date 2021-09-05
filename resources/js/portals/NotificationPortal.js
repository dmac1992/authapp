import React from "react";
import ReactDOM from "react-dom";

const NotificationPortal = ({ notification }) => {
    return ReactDOM.createPortal(<p>{notification}</p>, document.querySelector('#notification-portal'));
};

export default NotificationPortal;
