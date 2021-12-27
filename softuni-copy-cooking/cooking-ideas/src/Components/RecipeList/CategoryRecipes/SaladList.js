import RecipeCard from "../RecipeCard/RecipeCard";
import {useEffect, useState} from "react";
import * as recipesService from "../../../services/recipesService";
import "../RecipeList.css";

const SaladList = () => {

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
                recipe.filter(recipe => recipe.type === 'salad').length > 0
                    // recipe.length > 0
                    ? (
                        <ul className="other-recipes-list">
                            {
                                recipe.filter(recipe => recipe.type === 'salad').map(recipe => <RecipeCard key={recipe._id}
                                                                                                             recipe={recipe}/>)
                            }
                        </ul>
                    )
                    : <p className="no-recipes">No recipes with salads yet!</p>
            }
        </>
    )

}

export default SaladList;