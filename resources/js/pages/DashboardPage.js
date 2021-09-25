import React from "react";
import { useSelector } from 'react-redux';

function DashboardPage() {

    const { firstName, lastName, email } = useSelector((state) => state.user);

    return (
        <div>
            <h1>DASHBOARD</h1>
            <p>first name: {firstName}</p>
            <p>last name: {lastName}</p>
            <p>email: {email}</p>
        </div>
    );
}

export default DashboardPage;
