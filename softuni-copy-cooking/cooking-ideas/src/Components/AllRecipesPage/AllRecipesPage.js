import {Routes, Route, Link} from "react-router-dom";
import RecipeList from "../RecipeList/RecipeList";
import CocktailsList from "../RecipeList/CategoryRecipes/CocktailsList";
import VeganList from "../RecipeList/CategoryRecipes/VeganList";
import SoupList from "../RecipeList/CategoryRecipes/SoupList";
import MeatList from "../RecipeList/CategoryRecipes/MeatList";
import ChristmasList from "../RecipeList/CategoryRecipes/ChristmasList";
import AllRecipeCategory from "../RecipeList/AllRecipeCategory";
import PizzaList from "../RecipeList/CategoryRecipes/PizzaList";
import SaladList from "../RecipeList/CategoryRecipes/SaladList";
import DessertList from "../RecipeList/CategoryRecipes/DessertList";
import Other from "../RecipeList/CategoryRecipes/Other";
import {useEffect, useState} from "react";
import * as recipesService from '../../services/recipesService';
import "./AllRecipes.css";


const AllRecipesPage = () => {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        recipesService.getAll()
            .then(result => {
                setRecipe(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

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
                    <Route path="/" element={<RecipeList recipe={recipe}/>}/>
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