import {Routes, Route, Link} from "react-router-dom";
import ArticlesList from "../ArticlesList/ArticlesList";
import Fruit from "../ArticlesList/Fruit";
import Vegetable from "../ArticlesList/Vegetable";
import Herbs from "../ArticlesList/Herbs";
import AllArticlesCategory from "../ArticlesList/AllArticlesCategory";


const AllArticlesPage = () => {

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>All Articles</h1>

            <nav style={{"text-align": "center"}}>
                <Link to="all-articles-category" style={{"margin": "20px","font-size": "25px","color":"darkred"}}>All</Link>
                <Link to="fruit" style={{"margin": "20px","font-size": "25px","color":"darkred"}}>Fruit</Link>
                <Link to="vegetable" style={{"margin": "20px","font-size": "25px","color":"darkred"}}>Vegetable</Link>
                <Link to="herbs" style={{"margin": "20px","font-size": "25px","color":"darkred"}}>Herbs</Link>
            </nav>

            <section>

                <Routes>
                    <Route path="/" element={<ArticlesList/>}/>
                    <Route path="/all-articles-category" element={<AllArticlesCategory/>}/>
                    <Route path="/fruit" element={<Fruit/>}/>
                    <Route path="/vegetable" element={<Vegetable/>}/>
                    <Route path="/herbs" element={<Herbs/>}/>

                </Routes>
            </section>

        </section>
    );
}
export default AllArticlesPage;