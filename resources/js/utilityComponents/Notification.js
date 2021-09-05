import React from "react";

const notificationStyle = {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: '1.5rem'
}


function Notification({ notification }) {

    return (
        <p className="app-notification" style={notificationStyle}>
            { notification }
        </p>
    );

}

export default Notification;
