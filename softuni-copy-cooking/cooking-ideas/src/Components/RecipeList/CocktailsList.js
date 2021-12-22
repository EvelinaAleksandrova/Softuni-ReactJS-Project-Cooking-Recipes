import RecipeCard from "./RecipeCard/RecipeCard";
import {useEffect, useState} from "react";
import * as recipesService from "../../services/recipesService";
import "./RecipeList.css";

const CocktailsList = () => {

    const [recipe, setRecipe] = useState([]);
    useEffect(() => {
        recipesService.getAll()
            .then(result => {
                setRecipe(result);
            });
    }, []);

    return (
        <>
            {
                recipe.filter(recipe => recipe.type === 'drinks/cocktails') > 0
                // recipe.length > 0
                    ? (
                        <ul className="other-recipes-list">
                            {
                                recipe.filter(recipe => recipe.type === 'drinks/cocktails').map(recipe =><RecipeCard key={recipe._id} recipe={recipe}/>)
                            }
                        </ul>
                    )
                    : <p className="no-recipes" >No recipes for drinks and cocktails yet!</p>
            }
        </>
    )

}

export default CocktailsList;