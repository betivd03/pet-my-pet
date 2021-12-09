import { Link } from "react-router-dom";

// const Header = ({isAuthenticated, user})
const Header = ({
    email
}) => {
    let guestNavigation = (
        <div id="guest">
            <Link to="/login" className="button">Login</Link>
            <Link to="/register" className="button">Register</Link>
        </div>
    );

    let userNavigation = (
        <div id="user">
            <span>Welcome, {email}</span>
            <Link to="/my-pets" className="button">My Pets</Link>
            <Link to="/create" className="button">Add Pet</Link>
            <Link to="/logout" className="button">Logout</Link>
        </div>
    );
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/dashboard">Dashboard</Link>

                    {email 
                        ? userNavigation
                        : guestNavigation
                    }
                </section>
            </nav>
        </header>
    );
};

export default Header;