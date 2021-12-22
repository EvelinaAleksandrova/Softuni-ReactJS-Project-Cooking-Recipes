import {Link} from 'react-router-dom';
import {useContext} from "react";
import "./Header.css";
import {AuthContext} from "../../contexts/AuthContext";

const Header = () => {
    const {user} = useContext(AuthContext);

    let guestNavigation = (
        <>
            <div id="guest">
                <Link className="button" to="/all-recipes">All Recipes</Link>
                <Link className="button" to="/all-articles">All Articles</Link>
                <Link className="button" to="/login">Login</Link>
                <Link to="/register" className="button">Register</Link>
            </div>
        </>
    );

    let userNavigation = (
        <>

            <div id="user">
                <Link className="button" to="/all-recipes">All Recipes</Link>
                <Link className="button" to="/my-recipes">My Recipes</Link>
                <Link className="button" to="/create">Add Recipe</Link>
                <Link className="button" to="/all-articles">All Articles</Link>
                <Link className="button" to="/my-articles">My Articles</Link>
                <Link className="button" to="/create-article">Add Article</Link>
                <Link id="logout-button" className="button" to="/logout">Logout</Link>
                <span className="welcome-user">Welcome, {user.email} </span>
            </div>

        </>

    );
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/home" style={{"font-size":"25px"}}>Cooking Ideas</Link>
                    {
                        user.email
                            ? userNavigation
                            : guestNavigation
                    }
                </section>
            </nav>
        </header>

    );
}
export default Header;