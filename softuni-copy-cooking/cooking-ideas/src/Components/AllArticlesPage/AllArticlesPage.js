import {Routes, Route, Link} from "react-router-dom";
import ArticlesList from "../ArticlesList/ArticlesList";
import Fruit from "../ArticlesList/Fruit";
import Vegetable from "../ArticlesList/Vegetable";
import Herbs from "../ArticlesList/Herbs";


const AllArticlesPage = () => {

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>All Articles</h1>

            <nav>
                <Link to="fruit" style={{"margin": "50px","font-size": "30px"}}>Fruit</Link>
                <Link to="vegetable" style={{"margin": "50px","font-size": "30px"}}>Vegetable</Link>
                <Link to="herbs" style={{"margin": "50px","font-size": "30px"}}>Herbs</Link>
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