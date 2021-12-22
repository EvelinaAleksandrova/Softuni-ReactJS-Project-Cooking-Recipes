import {Routes, Route, Link} from "react-router-dom";
import RecipeList from "../RecipeList/RecipeList";
import CocktailsList from "../RecipeList/CocktailsList";
import VeganList from "../RecipeList/VeganList";
import SoupList from "../RecipeList/SoupList";
import MeatList from "../RecipeList/MeatList";
import ChristmasList from "../RecipeList/ChristmasList";
import AllRecipeCategory from "../RecipeList/AllRecipeCategory";
import PizzaList from "../RecipeList/PizzaList";
import SaladList from "../RecipeList/SaladList";
import DessertList from "../RecipeList/DessertList";
import Other from "../RecipeList/Other";
import "./AllRecipes.css";

const AllRecipesPage = () => {

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>All Recipes</h1>

            <nav className="nav-all-recipes" style={{"text-align": "center"}}>
                <Link to="all-recipes-category" className="link-style-recipe">All</Link>
                <Link to="soup" className="link-style-recipe">Soup</Link>
                <Link to="meat" className="link-style-recipe">Meat</Link>
                <Link to="vegan" className="link-style-recipe">Vegan</Link>
                <Link to="salad" className="link-style-recipe">Salads</Link>
                <Link to="dessert" className="link-style-recipe">Desserts</Link>
                <Link to="pizza" className="link-style-recipe">Pizza</Link>
                <Link to="cocktails" className="link-style-recipe">Drinks & Cocktails</Link>
                <Link to="christmas" className="link-style-recipe">Christmas</Link>
                <Link to="other-recipe" className="link-style-recipe">Other</Link>
            </nav>

            <section>
                <Routes>
                    <Route path="/" element={<RecipeList/>}/>
                    <Route path="/all-recipes-category" element={<AllRecipeCategory/>}/>
                    <Route path="/soup" element={<SoupList/>}/>
                    <Route path="/meat" element={<MeatList/>}/>
                    <Route path="/vegan" element={<VeganList/>}/>
                    <Route path="/salad" element={<SaladList/>}/>
                    <Route path="/dessert" element={<DessertList/>}/>
                    <Route path="/pizza" element={<PizzaList/>}/>
                    <Route path="/cocktails" element={<CocktailsList/>}/>
                    <Route path="/christmas" element={<ChristmasList/>}/>
                    <Route path="/other-recipe" element={<Other/>}/>
                </Routes>
            </section>

        </section>
    );
}
export default AllRecipesPage;