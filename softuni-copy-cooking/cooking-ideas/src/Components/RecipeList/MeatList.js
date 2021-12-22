import RecipeCard from "./RecipeCard/RecipeCard";
import {useEffect, useState} from "react";
import * as recipesService from "../../services/recipesService";
import "./RecipeList.css";

const MeatList = () => {

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
                recipe.filter(recipe => recipe.type === 'meat') > 0
                    // recipe.length > 0
                    ? (
                        <ul className="other-recipes-list">
                            {
                                recipe.filter(recipe => recipe.type === 'meat').map(recipe => <RecipeCard key={recipe._id}
                                                                                                          recipe={recipe}/>)
                            }
                        </ul>
                    )
                    : <p className="no-recipes">No recipes with meat yet!</p>
            }
        </>
    )

}

export default MeatList;