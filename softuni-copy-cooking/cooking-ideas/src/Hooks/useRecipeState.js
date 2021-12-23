import {useState, useEffect} from "react";

import * as recipesService from '../services/recipesService';

 const useRecipeState = (recipeId) => {
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        recipesService.getOne(recipeId)
            .then(recipeResult => {
                setRecipe(recipeResult);
            })

    }, [recipeId]);
    return [
        recipe,
        setRecipe
    ]
}
export default useRecipeState;