import {Routes, Route, Link} from "react-router-dom";
import ArticlesList from "../ArticlesList/ArticlesList";
import Fruit from "../ArticlesList/Fruit";
import Vegetable from "../ArticlesList/Vegetable";
import Herbs from "../ArticlesList/Herbs";
import AllArticlesCategory from "../ArticlesList/AllArticlesCategory";
import OtherArticle from "../ArticlesList/OtherArticle";
import "./AllArticles.css";

const AllArticlesPage = () => {

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
                    <Route path="/" element={<ArticlesList/>}/>
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