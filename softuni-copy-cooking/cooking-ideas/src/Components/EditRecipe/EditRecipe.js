import useRecipeState from "../../Hooks/useRecipeState";
import {useParams} from "react-router-dom";
import "./EditRecipe.css";


const EditRecipe = () => {
    const {recipeId} = useParams();
    const [recipe, setRecipe] = useRecipeState(recipeId);

    const recipeEditSubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" method="POST" onSubmit={recipeEditSubmitHandler}>
                <fieldset>
                    <legend>Edit my Recipe</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" defaultValue={recipe.name}/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description"
                                      id="description" defaultValue={recipe.description}/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={recipe.imageUrl}/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="soup">Soup</option>
                                <option value="meat">Meat</option>
                                <option value="vegan">Vegan</option>
                                <option value="salad">Salad</option>
                                <option value="dessert">Dessert</option>
                                <option value="pizza">Pizza</option>
                                <option value="cocktails">Drinks & Cocktails</option>
                                <option value="christmas">Christmas</option>
                                <option value="other-recipe">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Save"/>
                </fieldset>
            </form>
        </section>
    );
}

export default EditRecipe;