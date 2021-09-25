import React from "react";
import { useSelector } from "react-redux";

const notificationStyle = {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: '1.5rem'
}


function Notification() {

    const  notification  = useSelector(state => state.notification );

    return (
        <p className="app-notification" style={notificationStyle}>
            { notification }
        </p>
    );

}

export default Notification;
