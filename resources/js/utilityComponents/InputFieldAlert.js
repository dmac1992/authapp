import React from "react";

function InputFieldAlert({ message }) {

    const styles = {
        'fontWeight': 'bold',
        'color'      : '#cc0000'
    };

    return (
        <p style={styles}>
            { message }
        </p>
    );

}

export default InputFieldAlert;
