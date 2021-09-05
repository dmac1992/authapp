import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <nav id="navigation">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Register">Register</Link>
                    </li>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                    <li>
                        <Link to="/Dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <a onClick={console.log('loging out')} href="#">Logout</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
