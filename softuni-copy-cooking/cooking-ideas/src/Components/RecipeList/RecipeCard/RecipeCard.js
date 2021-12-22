import {Link} from 'react-router-dom';
import "../RecipeList.css";

const RecipeCard = ({
     recipe
                 }) => {
    return (
        <li className="otherRecipe">

            <h3 className="name-recipe">{recipe.name}</h3>
            <p className="type-recipe">{recipe.type}</p>
            <p className="img"><img src={recipe.imageUrl}/></p>
            <Link className="button-recipe" to={`/details-recipe/${recipe._id}`}>Details</Link>
        </li>
    )

}

export default RecipeCard;