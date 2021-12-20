import {useParams} from "react-router-dom";
import * as recipesService from '../../services/recipesService';
import {useState, useEffect} from "react";
import "Details.css";


const DetailsRecipe = () => {
    const [recipe, setRecipe] = useState({});
    const {recipeId} = useParams();

    useEffect(async () => {
        let petResult = await recipesService.getOne(recipeId);
        setRecipe(petResult);
    }, []);

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {recipe.name}</h3>
                <p className="type">Type: {recipe.type}</p>
                <p className="img"><img src={recipe.imageUrl}/></p>
                <div className="actions">

                    <a className="button" href="#">Edit</a>
                    <a className="button" href="#">Delete</a>

                    <a className="button" href="#">Like</a>


                    <div className="likes">
                        <img className="hearts" src="/images/heart.png"/>
                        <span id="total-likes">Likes: {recipe.likes}</span>
                    </div>

                </div>
            </div>
            <div className="recipe-description">
                <h3>Description:</h3>
                <p>{recipe.description}</p>
            </div>
        </section>
    );
}

export default DetailsRecipe;