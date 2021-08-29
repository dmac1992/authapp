import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationPage from './RegistrationPage';

function Index() {
    return (
        <div className="container">
            <RegistrationPage />
        </div>
    );
}
export default Index;

if (document.getElementById('application')) {
    ReactDOM.render(<Index />, document.getElementById('application'));
}
