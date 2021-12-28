import RecipeCard from "./RecipeCard/RecipeCard";
import "./RecipeList.css";

const RecipeList = ({recipe}) => {


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