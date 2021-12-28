import {Routes, Route, Link} from "react-router-dom";
import ArticlesList from "../ArticlesList/ArticlesList";
import Fruit from "../ArticlesList/CategoryArticle/Fruit";
import Vegetable from "../ArticlesList/CategoryArticle/Vegetable";
import Herbs from "../ArticlesList/CategoryArticle/Herbs";
import AllArticlesCategory from "../ArticlesList/AllArticlesCategory";
import OtherArticle from "../ArticlesList/CategoryArticle/OtherArticle";
import {useEffect, useState} from "react";
import * as articlesService from "../../services/articlesService";
import "./AllArticles.css";

const AllArticlesPage = () => {

    const [article, setArticle] = useState([]);

    useEffect(() => {
        articlesService.getAll()
            .then(result => {
                setArticle(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>All Articles</h1>

            <nav style={{"text-align": "center"}}>
                <Link to="all-articles-category" className="link-style-article">All</Link>
                <Link to="fruit" className="link-style-article">Fruit</Link>
                <Link to="vegetable" className="link-style-article">Vegetable</Link>
                <Link to="herbs" className="link-style-article">Herbs</Link>
                <Link to="other-article" className="link-style-article">Other</Link>
            </nav>

            <section>

                <Routes>
                    <Route path="/" element={<ArticlesList article={article}/>}/>
                    <Route path="/all-articles-category" element={<AllArticlesCategory/>}/>
                    <Route path="/fruit" element={<Fruit/>}/>
                    <Route path="/vegetable" element={<Vegetable/>}/>
                    <Route path="/herbs" element={<Herbs/>}/>
                    <Route path="/other-article" element={<OtherArticle/>}/>

                </Routes>
            </section>

        </section>
    );
}
export default AllArticlesPage;