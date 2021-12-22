import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import useLocalStorage from "./Hooks/useLocalStorage";


import {AuthProvider} from "./contexts/AuthContext";

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
import DetailsArticle from "./Components/DetailsArticle/DetailsArticle";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <AuthProvider>
            <div id="container">
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
                <main id="site-content">
                    <Routes>
                        <Route path="/home/*" element={<HomePage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/logout" element={<LogoutPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="/all-recipes/*" element={<AllRecipesPage/>}/>
                        <Route path="/all-articles/*" element={<AllArticlesPage/>}/>
                        <Route path="/my-recipes" element={<MyRecipesPage/>}/>
                        <Route path="/my-articles" element={<MyArticlesPage/>}/>
                        <Route path="/create" element={<CreateRecipe/>}/>
                        <Route path="/create-article" element={<CreateArticle/>}/>
                        <Route path="/details-recipe/:recipeId" element={<DetailsRecipe/>}/>
                        <Route path="/details-article/:articleId" element={<DetailsArticle/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </AuthProvider>
    );
}

export default App;