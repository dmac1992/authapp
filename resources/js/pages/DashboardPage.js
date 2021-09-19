import React from "react";
import { useSelector } from 'react-redux';

function DashboardPage() {

    const { user } = useSelector((state) => state.user);

    return (
        <div>
            <h1>DASHBOARD</h1>
            <p>first name: {user.fname}</p>
            <p>last name: {user.lname}</p>
            <p>email: {user.email}</p>
            <p>registered at: {user.registeredAt}</p>
        </div>
    );
}

export default DashboardPage;
