import * as recipesService from '../../services/recipesService';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../contexts/AuthContext";
import {useContext} from "react";

const CreateRecipe = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const onRecipeCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let description = formData.get('description');
        let ingredients = formData.get('ingredients');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');

        recipesService.create({
            name,
            ingredients,
            description,
            imageUrl,
            type
        }, user.accessToken)
            .then(result => {
            navigate('/all-recipes');
        });
    }

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onRecipeCreate} method="POST">
                <fieldset>
                    <legend style={{"text-align": "center","width":"94%", "font-size":"20px"}}>Add new Recipe</legend>

                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" required
                                   />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="ingredients">Ingredients</label>
                        <span className="input">
                            <textarea name="ingredients" id="ingredients" placeholder="Ingredients" required/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description" required/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" required/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" >
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
                    <input className="button submit" type="submit" value="Add Recipe"
                           style={{ "background": "#d36161"}}/>
                </fieldset>
            </form>
        </section>
    );
}

export default CreateRecipe;