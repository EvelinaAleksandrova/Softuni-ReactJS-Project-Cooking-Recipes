import {Routes, Route, Link} from "react-router-dom";
import RecipeList from "../RecipeList/RecipeList";
import CocktailsList from "../RecipeList/CocktailsList";
import VeganList from "../RecipeList/VeganList";
import SoupList from "../RecipeList/SoupList";
import MeatList from "../RecipeList/MeatList";
import ChristmasList from "../RecipeList/ChristmasList";
import AllRecipeCategory from "../RecipeList/AllRecipeCategory";


const AllRecipesPage = () => {

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>All Recipes</h1>

            <nav className="nav-all-recipes" style={{"text-align": "center"}}>
                <Link to="all-recipes-category" style={{"margin": "20px","font-size": "25px","color":"darkred"}}>All</Link>
                <Link to="soup" style={{"margin": "30px","font-size": "25px","color":"darkred"}}>Soup</Link>
                <Link to="meat" style={{"margin": "30px","font-size": "25px","color":"darkred"}}>Meat</Link>
                <Link to="vegan" style={{"margin": "30px","font-size": "25px","color":"darkred"}}>Vegan</Link>
                <Link to="cocktails" style={{"margin": "30px","font-size": "25px","color":"darkred"}}>Drinks & Cocktails</Link>
                <Link to="christmas" style={{"margin": "30px","font-size": "25px","color":"darkred"}}>Christmas</Link>
            </nav>

            <section>

                <Routes>
                    <Route path="/" element={<RecipeList/>}/>
                    <Route path="/all-recipes-category" element={<AllRecipeCategory/>}/>
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
export default AllRecipesPage;