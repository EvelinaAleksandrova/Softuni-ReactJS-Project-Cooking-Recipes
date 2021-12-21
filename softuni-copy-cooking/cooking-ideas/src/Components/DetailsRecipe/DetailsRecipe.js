import {useParams} from "react-router-dom";
import * as recipesService from '../../services/recipesService';
import {useState, useEffect,useContext} from "react";
import "./DetailsRecipe.css";
import {AuthContext} from "../../contexts/AuthContext";

const DetailsRecipe = () => {
    const {user} = useContext(AuthContext);
    const [recipe, setRecipe] = useState({});
    const {recipeId} = useParams();

    useEffect(async () => {
        let petResult = await recipesService.getOne(recipeId);
        setRecipe(petResult);
    }, []);

    const ownerButtons = (
        <>
            <a className="button" href="#">Edit</a>
            <a className="button" href="#">Delete</a>
        </>
    );

    const userButtons = (
        <>
            <a className="button" href="#">Like</a>
        </>
    )

    return (
        <section id="details-page" className="details">
            <div className="recipe-information">
                <h3>Name: {recipe.name}</h3>
                <p className="type">Type: {recipe.type}</p>
                <p className="img"><img src={recipe.imageUrl}/></p>
                <div className="actions">

                    {user._id && (user._id === recipeId._ownerId
                            ?userButtons
                            : ownerButtons
                    )
                    }

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png"/>
                        <span id="total-likes">Likes: {recipe.likes?.length}</span>
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