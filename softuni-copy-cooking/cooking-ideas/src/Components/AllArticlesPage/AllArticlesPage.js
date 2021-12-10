import {Routes, Route, Link} from "react-router-dom";
import ArticlesList from "../ArticlesList/ArticlesList";
import Fruit from "../ArticlesList/Fruit";
import Vegetable from "../ArticlesList/Vegetable";


const AllArticlesPage = () => {

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Articles</h1>

            <nav>
                <Link to="fruit" style={{"margin": "50px","font-size": "30px"}}>Fruit</Link>
                <Link to="vegetable" style={{"margin": "50px","font-size": "30px"}}>Vegetable</Link>
            </nav>

            <section>
                <Routes>
                    <Route path="/articlesList" element={<ArticlesList/>}/>
                    <Route path="/fruit" element={<Fruit/>}/>
                    <Route path="/vegetable" element={<Vegetable/>}/>

                </Routes>
            </section>

        </section>
    );
}
export default AllArticlesPage;