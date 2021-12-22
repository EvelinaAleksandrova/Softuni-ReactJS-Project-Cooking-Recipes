import {useState, useEffect} from "react";
import * as recipesService from "../../services/recipesService";
import {AuthContext} from '../../contexts/AuthContext';
import RecipeList from "../RecipeList/RecipeList";

const MyRecipesPage = () => {
    // const [recipes, setRecipes] = useState([]);
    // const {user} = AuthContext();
    //
    // useEffect(() => {
    //     recipesService.getMyRecipes(user._id)
    //         .then(recipeResult => {
    //             setRecipes(recipeResult);
    //         });
    // }, []);

    return (
        <section id="my-recipes-page" className="my-recipes">
            <h1>My Recipes</h1>
            {/*<RecipeList recipe={recipes}/>*/}
            <p className="no-recipes">No recipes yet!</p>
        </section>
    );
}

export default MyRecipesPage;
