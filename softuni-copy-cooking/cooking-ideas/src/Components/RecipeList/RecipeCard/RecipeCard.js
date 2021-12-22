import {Link} from 'react-router-dom';

const RecipeCard = ({
     recipe
                 }) => {
    return (
        <li className="otherRecipe">

            <h3>{recipe.name}</h3>
            <p>{recipe.type}</p>
            <p className="img"><img src={recipe.imageUrl}/></p>
            <Link className="button" to={`/details-recipe/${recipe._id}`}>Details</Link>
        </li>
    )

}

export default RecipeCard;