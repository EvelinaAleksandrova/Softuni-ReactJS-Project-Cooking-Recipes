import {Routes, Route, Link} from "react-router-dom";
import RecipeList from "../RecipeList/RecipeList";
import CocktailsList from "../RecipeList/CocktailsList";
import VeganList from "../RecipeList/VeganList";
import SoupList from "../RecipeList/SoupList";
import MeatList from "../RecipeList/MeatList";
import ChristmasList from "../RecipeList/ChristmasList";
import AllRecipeCategory from "../RecipeList/AllRecipeCategory";


const DashboardPage = () => {

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>All Recipes</h1>

            <nav>

                <Link to="all" style={{"margin": "50px","font-size": "30px"}}>All</Link>
                <Link to="soup" style={{"margin": "50px","font-size": "30px"}}>Soup</Link>
                <Link to="meat" style={{"margin": "50px","font-size": "30px"}}>Meat</Link>
                <Link to="vegan" style={{"margin": "50px","font-size": "30px"}}>Vegan</Link>
                <Link to="cocktails" style={{"margin": "50px","font-size": "30px"}}>Drinks & Cocktails</Link>
                <Link to="christmas" style={{"margin": "50px","font-size": "30px"}}>Christmas</Link>
            </nav>

            <section>

                <Routes>
                    <Route path="/" element={<RecipeList/>}/>
                    <Route path="/all" element={<AllRecipeCategory/>}/>
                    <Route path="/soup" element={<SoupList/>}/>
                    <Route path="/meat" element={<MeatList/>}/>
                    <Route path="/vegan" element={<VeganList/>}/>
                    <Route path="/cocktails" element={<CocktailsList/>}/>
                    <Route path="/christmas" element={<ChristmasList/>}/>
                </Routes>
            </section>

        </section>
    );
}
export default DashboardPage;