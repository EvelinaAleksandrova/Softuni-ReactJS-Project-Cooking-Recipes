import useRecipeState from "../../Hooks/useRecipeState";
import {useNavigate, useParams} from "react-router-dom";
import "./EditRecipe.css";
import {useState} from "react";
import {Alert} from "react-bootstrap";
import * as recipesService from "../../services/recipesService";


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
const difficultyLevel = [
    {value: 'beginner', text: 'Beginner'},
    {value: 'medium', text: 'Medium'},
    {value: 'advanced', text: 'Advanced'}
]


const EditRecipe = () => {
    const {recipeId} = useParams();
    const navigate = useNavigate();

    const [recipe, setRecipe] = useRecipeState(recipeId);
    const [type, setType] = useState(recipe.type);

    const [errors, setErrors] = useState({name: false});
    const [errorsIngredients, setErrorsIngredients] = useState({name: false});
    const [errorsDescription, setErrorsDescription] = useState({name: false});
    const [errorsTime, setErrorsTime] = useState({name: false});


    const recipeEditSubmitHandler = (e) => {
        e.preventDefault();
        let recipeData = Object.fromEntries(new FormData(e.currentTarget));
        console.log(recipeData);
        recipesService.update(recipe._id, recipeData);
        navigate(`/details-recipe/${recipe._id}`);
    }
    const nameChangeHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 2) {
            setErrors(state => ({...state, name: "Name of recipe should be at least 2 characters!"}))
        } else {
            setErrors(state => ({...state, name: false}));
        }
    }
    const ingredientsChangeHandler = (e) => {
        let currentIngredients = e.target.value;

        if (currentIngredients.length < 10) {
            setErrorsIngredients(state => ({...state, name: "Ingredients should be at least 10 characters!"}))
        } else {
            setErrorsIngredients(state => ({...state, name: false}));
        }
    }
    const descriptionChangeHandler = (e) => {
        let currentDescription = e.target.value;

        if (currentDescription.length < 10) {
            setErrorsDescription(state => ({...state, name: "Description should be at least 10 characters!"}))
        } else {
            setErrorsDescription(state => ({...state, name: false}));
        }
    }
    const timeChangeHandler = (e) => {
        let currentTime = e.target.value;

        if (currentTime < 4) {
            setErrorsTime(state => ({...state, name: "Time should be at least 4 minutes!"}))
        } else {
            setErrorsTime(state => ({...state, name: false}));
        }
    }

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" method="POST" onSubmit={recipeEditSubmitHandler}>
                <fieldset style={{"box-shadow": "0 0 1rem 0.1rem rgb(211, 97, 97)"}}>
                    <legend style={{
                        "text-align": "center",
                        "width": "101%",
                        "font-size": "15px",
                        "font-weight": "bold"
                    }}>Edit my Recipe
                    </legend>

                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input" style={{borderColor: errors.name ? 'blue' : 'inherit'}}>
                            <input type="text" name="name" id="name" defaultValue={recipe.name}
                                   onBlur={nameChangeHandler}/>
                        </span>
                        <Alert variant="primary" show={errors.name}>{errors.name}</Alert>
                    </p>

                    <p className="field">
                        <label htmlFor="ingredients">Ingredients</label>
                        <span className="input" style={{borderColor: errorsIngredients.name ? 'blue' : 'inherit'}}>
                            <textarea name="ingredients"
                                      id="ingredients" defaultValue={recipe.ingredients}
                                      onBlur={ingredientsChangeHandler}
                            />
                        </span>
                        <Alert variant="primary" show={errorsIngredients.name}>{errorsIngredients.name}</Alert>
                    </p>


                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input" style={{borderColor: errorsDescription.name ? 'blue' : 'inherit'}}>
                            <textarea name="description"
                                      id="description" defaultValue={recipe.description}
                                      onBlur={descriptionChangeHandler}
                            />
                        </span>
                        <Alert variant="primary" show={errorsDescription.name}>{errorsDescription.name}</Alert>

                    </p>


                    <p className="field">
                        <label htmlFor="timeCooking">Preparation time (minutes)</label>
                        <span className="input" style={{borderColor: errorsTime.name ? 'blue' : 'inherit'}}>
                            <input type="text" name="timeCooking"
                                   id="timeCooking" defaultValue={recipe.timeCooking}
                                   onBlur={timeChangeHandler}
                            />
                        </span>
                        <Alert variant="primary" show={errorsTime.name}>{errorsTime.name}</Alert>
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
                            <select id="type" name="type" value={recipe.type}
                                    onChange={(e) => setRecipe(s =>
                                        ({...s, type: e.target.value}))}>>
                                {types.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                            </select>
                        </span>
                    </p>


                    <p className="field">
                        <label htmlFor="difficulty">Difficulty level of preparation</label>
                        <span className="input">
                            <select id="difficulty" name="difficulty" value={recipe.difficulty}
                                    onChange={(e) => setRecipe(s =>
                                        ({...s, difficulty: e.target.value}))}>>
                                {difficultyLevel.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
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