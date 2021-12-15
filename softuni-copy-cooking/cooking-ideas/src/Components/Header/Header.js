import { Link } from 'react-router-dom';
const Header = ({
                    isAuthenticated,
                    user,
                }) => {
    let guestNavigation = (
        <div id="guest">
            <Link className="button" to="/all-recipes">All Recipes</Link>
            <Link className="button" to="/all-articles">All Articles</Link>
            <Link className="button" to="/login">Login</Link>
            <Link to="/register" className="button">Register</Link>
        </div>
    );

    let userNavigation = (
        <div id="user">

            <span>Welcome, {user}</span>
            <Link className="button" to="/all-recipes">All Recipes</Link>
            <Link className="button" to="/my-recipes">My Recipes</Link>
            <Link className="button" to="/create">Add Recipe</Link>
            <Link className="button" to="/all-articles">All Articles</Link>
            <Link className="button" to="/my-articles">My Articles</Link>
            <Link className="button" to="/create-article">Add Article</Link>
            <Link className="button" to="/logout">Logout</Link>
        </div>
    );
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/home">Cooking Ideas</Link>
                    {isAuthenticated
                        ? userNavigation
                        : guestNavigation
                    }
                </section>
            </nav>
        </header>
    );
}
export default Header;