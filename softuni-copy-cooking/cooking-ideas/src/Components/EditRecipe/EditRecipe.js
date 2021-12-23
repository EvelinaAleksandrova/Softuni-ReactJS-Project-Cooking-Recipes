import useRecipeState from "../../Hooks/useRecipeState";
import {useParams} from "react-router-dom";
import "./EditRecipe.css";
import {useState} from "react";
import {Alert} from "react-bootstrap";

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
    const [recipe] = useRecipeState(recipeId);
    const [errors, setErrors] = useState({name: false});

    const recipeEditSubmitHandler = (e) => {
        e.preventDefault();
    }
    const nameChangeHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 3) {
            setErrors(state => ({...state, name: "Your name shoul be at least 3 characters!"}))
        } else {
            setErrors(state => ({...state, name: false}));
        }
    }

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" method="POST" onSubmit={recipeEditSubmitHandler}>
                <fieldset>
                    <legend>Edit my Recipe</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input" style={{borderColor: errors.name ? 'red' : 'inherit'}}>
                            <input type="text" name="name" id="name" defaultValue={recipe.name}
                                   onBlur={nameChangeHandler}/>
                        </span>
                        <Alert variant="warning" show={errors.name}  >{errors.name}</Alert>
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