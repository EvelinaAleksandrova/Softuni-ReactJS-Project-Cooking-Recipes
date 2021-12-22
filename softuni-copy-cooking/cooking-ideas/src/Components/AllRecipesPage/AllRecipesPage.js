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


function DesertList() {
    return null;
}

function OtherList() {
    return null;
}

const AllRecipesPage = () => {

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>All Recipes</h1>

            <nav className="nav-all-recipes" style={{"text-align": "center"}}>
                <Link to="all-recipes-category" style={{"margin": "20px","font-size": "25px","color":"darkred"}}>All</Link>
                <Link to="soup" style={{"margin": "30px","font-size": "25px","color":"darkred"}}>Soup</Link>
                <Link to="meat" style={{"margin": "30px","font-size": "25px","color":"darkred"}}>Meat</Link>
                <Link to="vegan" style={{"margin": "30px","font-size": "25px","color":"darkred"}}>Vegan</Link>
                <Link to="salad" style={{"margin": "30px","font-size": "25px","color":"darkred"}}>Salads</Link>
                <Link to="dessert" style={{"margin": "30px","font-size": "25px","color":"darkred"}}>Desserts</Link>
                <Link to="pizza" style={{"margin": "30px","font-size": "25px","color":"darkred"}}>Pizza</Link>
                <Link to="cocktails" style={{"margin": "30px","font-size": "25px","color":"darkred"}}>Drinks & Cocktails</Link>
                <Link to="christmas" style={{"margin": "30px","font-size": "25px","color":"darkred"}}>Christmas</Link>
                <Link to="other-recipe" style={{"margin": "30px","font-size": "25px","color":"darkred"}}>Other</Link>
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