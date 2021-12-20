import {Link} from 'react-router-dom';
import "./Header.css";

const Header = ({
                    isAuthenticated,
                    user,
                }) => {


    let guestNavigation = (
        <>
            <div id="guest">
                <Link className="button" to="/all-recipes">All Recipes</Link>
                <Link className="button" to="/all-articles">All Articles</Link>
                <Link className="button" to="/login">Login</Link>
                <Link to="/register" className="button">Register</Link>
            </div>

            {/*<div id="hamburger-guest" className="hamburger-guest">*/}
            {/*    /!*<img id="menuImg" src="Photos/menu%20(2).png" alt="" onClick="menuOpenAndClose()">*!/*/}
            {/*        <img id="menuImgGuest" src="https://img.icons8.com/external-tal-revivo*/}
            {/*        -duo-tal-revivo/50/000000/external-horizontal-separated-bars*/}
            {/*        -representing-hamburger-menu-layout-grid-duo-tal-revivo.png" onClick="menuOpenAndClose()" alt=""/>*/}

            {/*        <nav id="menu-hamburger-guest">*/}
            {/*            <Link className="button" to="/all-recipes">All Recipes</Link>*/}
            {/*            <Link className="button" to="/all-articles">All Articles</Link>*/}
            {/*            <Link className="button" to="/login">Login</Link>*/}
            {/*            <Link to="/register" className="button">Register</Link>*/}
            {/*        </nav>*/}
            {/*</div>*/}
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
            <span className="welcome-user">Welcome, {user}</span>


        </div>

    </>

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