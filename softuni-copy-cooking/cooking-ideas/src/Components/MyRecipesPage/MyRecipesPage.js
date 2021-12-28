import {useState, useEffect} from "react";
import * as recipesService from "../../services/recipesService";
import {useAuthContext} from '../../contexts/AuthContext';
import RecipeList from "../RecipeList/RecipeList";

const MyRecipesPage = () => {
    const [recipe, setRecipe] = useState([]);
    const {user} = useAuthContext();

    useEffect(() => {
        recipesService.getMyRecipes(user._id)
            .then(recipeResult => {
                setRecipe(recipeResult);
            });
    }, []);

    return (
        <section id="my-recipes-page" className="my-recipes">
            <h1>My Recipes</h1>
            {
                recipe.length > 0
                    ? <RecipeList recipe={recipe}/>
                    : <p className="no-recipes">You don't create any recipes!</p>
            }

        </section>
    );
}

export default MyRecipesPage;
