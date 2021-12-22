import RecipeCard from "./RecipeCard/RecipeCard";
import {useEffect, useState} from "react";
import * as recipesService from "../../services/recipesService";
import "./RecipeList.css";

const RecipeList = () => {

    const [recipe, setRecipe] = useState([]);
    useEffect(() => {
        recipesService.getAll()
            .then(result => {
                setRecipe(result);
            })
            .catch(error=>{
                console.log(error);
            })
    }, []);

    return (
        <>
            {
                recipe.length > 0
                    ? (
                        <ul className="other-recipes-list">
                            {
                                recipe.map(recipe => <RecipeCard key={recipe._id} recipe={recipe}/>)
                            }
                        </ul>
                    )
                    : <p className="no-recipes">No recipes yet!</p>
            }
        </>
    )

}

export default RecipeList;