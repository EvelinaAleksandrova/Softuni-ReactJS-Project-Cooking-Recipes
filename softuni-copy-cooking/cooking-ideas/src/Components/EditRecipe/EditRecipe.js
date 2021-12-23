import useRecipeState from "../../Hooks/useRecipeState";
import {useParams} from "react-router-dom";
import "./EditRecipe.css";

const types = [
    {value: 'soup', text: 'Soup'},
    {value: 'meat', text: 'Meat'},
    {value: 'vegan', text: 'Vegan'},
    {value: 'salad', text: 'Salad'},
    {value: 'dessert', text: 'Dessert'},
    {value: 'pizza', text: 'Pizza'},
    {value: 'cocktails', text: 'Drinks & Cocktails'},
    {value: 'christmas', text: 'Christmas'},
    {value: 'other-recipe', text: 'Other'},
]


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
                            <select id="type" name="type" value={recipe.type}>
                                {types.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
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