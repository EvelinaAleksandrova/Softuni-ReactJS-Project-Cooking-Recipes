import * as recipesService from '../../services/recipesService';
import {useNavigate} from "react-router-dom";
import {useAuthContext} from "../../contexts/AuthContext";
import {useState} from "react";
import {Alert} from "react-bootstrap";

const CreateRecipe = () => {
    const {user} = useAuthContext();
    const navigate = useNavigate();

    const [errors, setErrors] = useState({name: false});
    const [errorsDescription, setErrorsDescription] = useState({name: false});
    const [errorsIngredients, setErrorsIngredients] = useState({name: false});
    const [errorsTime, setErrorsTime] = useState({name: false});

    const onRecipeCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let description = formData.get('description');
        let ingredients = formData.get('ingredients');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');
        let difficulty = formData.get('difficulty');
        let timeCooking = formData.get('timeCooking');

        recipesService.create({
            name,
            ingredients,
            description,
            timeCooking,
            imageUrl,
            type,
            difficulty
        }, user.accessToken)
            .then(result => {
                navigate('/all-recipes');
            });
    }
    // const fileSelectedHandler = event => {
    //     console.log(event.target.files[0]);
    // }
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
            setErrorsDescription(state => ({...state, name: "Description of recipe should be at least 10 characters!"}))
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
        <section id="create-page" className="create">
            {/*box-shadow: 0 0 1rem 0.1rem rgb(211, 97, 97);*/}
            <form id="create-form" onSubmit={onRecipeCreate} method="POST" >
                <fieldset style={{"box-shadow":"0 0 1rem 0.1rem rgb(211, 97, 97)"}}>
                    <legend style={{
                        "text-align": "center",
                        "width": "101%",
                        "font-size": "15px",
                        "font-weight": "bold"
                    }}>Add new Recipe
                    </legend>

                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input" style={{borderColor: errors.name ? 'blue' : 'inherit'}}>
                            <input type="text" name="name" id="name" placeholder="Name"
                                   required
                                   onBlur={nameChangeHandler}
                            />
                        </span>
                        <Alert variant="primary" show={errors.name}>{errors.name}</Alert>
                    </p>


                    <p className="field">
                        <label htmlFor="ingredients">Ingredients</label>
                        <span className="input" style={{borderColor: errorsIngredients.name ? 'blue' : 'inherit'}}>
                            <textarea name="ingredients" id="ingredients" placeholder="Ingredients"
                                      required onBlur={ingredientsChangeHandler}/>
                        </span>
                        <Alert variant="primary" show={errorsIngredients.name}>{errorsIngredients.name}</Alert>
                    </p>


                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input" style={{borderColor: errorsDescription.name ? 'blue' : 'inherit'}}>
                            <textarea name="description" id="description" placeholder="Description"
                                      required onBlur={descriptionChangeHandler}/>
                        </span>
                        <Alert variant="primary" show={errorsDescription.name}>{errorsDescription.name}</Alert>
                    </p>


                    <p className="field">
                        <label htmlFor="timeCooking">Preparation time (minutes)</label>
                        <span className="input" style={{borderColor: errorsTime.name ? 'blue' : 'inherit'}}>
                            <input type="text" name="timeCooking" id="timeCooking" placeholder="Preparation Time"
                                   required onBlur={timeChangeHandler}
                            />
                        </span>
                        <Alert variant="primary" show={errorsTime.name}>{errorsTime.name}</Alert>
                    </p>


                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text"
                                // onChange={fileSelectedHandler}
                                   name="imageUrl" id="image"
                                   placeholder="Image" required/>
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


                    <p className="field">
                        <label htmlFor="difficulty">Difficulty level of preparation</label>
                        <span className="input">
                            <select id="difficulty" name="difficulty">
                                <option value="beginner">Beginner</option>
                                <option value="medium">Medium</option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </span>
                    </p>

                    <input className="button submit" type="submit" value="Add Recipe"
                           style={{"background": "#d36161"}}/>

                </fieldset>
            </form>
        </section>
    );
}

export default CreateRecipe;