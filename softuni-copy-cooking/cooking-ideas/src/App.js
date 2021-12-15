import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

import * as authService from './services/authService';
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import LoginPage from "./Components/LoginPage/LoginPage";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import MyRecipesPage from "./Components/MyRecipesPage/MyRecipesPage";
import CreateRecipe from "./Components/CreateRecipe/CreateRecipe";
import DetailsRecipe from "./Components/DetailsRecipe/DetailsRecipe";
import LogoutPage from "./Components/LogoutPage/LogoutPage";
import Footer from "./Components/Footer/Footer";
import MyArticlesPage from "./Components/MyArticlesPage/MyArticlesPage";
import CreateArticle from "./Components/CreateArticle/CreateArticle";
import AllArticlesPage from "./Components/AllArticlesPage/AllArticlesPage";
import AllRecipesPage from "./Components/AllRecipesPage/AllRecipesPage";

function App() {
    const [userInfo, setUserInfo] = useState({isAuthenticated: false, username: ''});

    useEffect(() => {
        let user = authService.getUser();

        setUserInfo({
            isAuthenticated: Boolean(user),
            user,
        })

    }, []);

    const onLogin = (email) => {
        setUserInfo({
            isAuthenticated: true,
            user: email,
        });
    };

    const onLogout = () => {
        setUserInfo({
            isAuthenticated: false,
            user: null,
        });
    };

    return (
        <div id="container">
            <Header {...userInfo} />

            <main id="site-content">
                <Routes>
                    <Route path="/home/*" element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage onLogin={onLogin}/>}/>
                    <Route path="/logout" element={<LogoutPage onLogout={onLogout}/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/all-recipes/*" element={<AllRecipesPage/>}/>
                    <Route path="/all-articles/*" element={<AllArticlesPage/>}/>
                    <Route path="/my-recipes" element={<MyRecipesPage/>}/>
                    <Route path="/my-articles" element={<MyArticlesPage/>}/>
                    <Route path="/create" element={<CreateRecipe/>}/>
                    <Route path="/create-article" element={<CreateArticle/>}/>
                    <Route path="/details/:recipeId" element={<DetailsRecipe/>}/>


                </Routes>
            </main>
            <Footer/>

        </div>
    );
}

export default App;