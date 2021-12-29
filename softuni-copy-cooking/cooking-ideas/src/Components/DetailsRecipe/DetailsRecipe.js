import {useParams, useNavigate, Link} from "react-router-dom";
import * as recipesService from '../../services/recipesService';
import * as likeRecipe from "../../services/likeRecipe";
import {useEffect, useState} from "react";
import "./DetailsRecipe.css";
import {useAuthContext} from "../../contexts/AuthContext";

import ConfirmDialog from '../../Components/CommonDirectory/ConfirmDialog';
import {Button} from "react-bootstrap";
import useRecipeState from "../../Hooks/useRecipeState";
import {types, useNotificationContext} from "../../contexts/NotificationContext";

const DetailsRecipe = () => {
    const navigate = useNavigate();
    const {user} = useAuthContext();
    const {recipeId} = useParams();
    const [recipe, setRecipe] = useRecipeState(recipeId);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const {addNotification} = useNotificationContext();

    useEffect(() => {
        likeRecipe.getRecipeLikes(recipeId)
            .then(likes => {
                setRecipe(state => ({...state, likes}))
            })
    }, []);

    const deleteHandler = (e) => {
        e.preventDefault();

        recipesService.removeRecipe(recipeId, user.accessToken)
            .then(() => {
                addNotification('You successfully delete this recipe.', types.success);
                navigate('/all-recipes');
            })
            .finally(() => {
                setShowDeleteDialog(false);
            });


    }
    const deleteClickHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(true);
    }

    const likeButtonClick = () => {
        if (user._id === recipe._ownerId) {
            return;
        }

        if (recipe.likes.includes(user._id)) {
            addNotification('You already liked this recipe.', types.warn);
            return;
        }

       likeRecipe.like(user._id, recipeId)
            .then(() => {
                setRecipe(state => ({...state, likes: [...state.likes, user._id]}));

                addNotification('You successfully liked this recipe.', types.success);
            });
    }

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit-recipe/${recipe._id}`} style={{"background": "#d36161"}}>Edit</Link>
            <a className="button" href="#" onClick={deleteClickHandler} style={{"background": "#d36161"}}>Delete</a>
        </>
    );

    const userButtons = (
        <>
            <Button className="button" onClick={likeButtonClick}
                    disabled={recipe.likes?.includes(user._id)}
                    style={{"background-color": "#efee65", "color": "black"}}>Like</Button>
        </>
    )

    return (
        <>
            <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler}/>
            <section id="details-page" className="details">
                <div className="recipe-information">
                    <h3 style={{"padding-bottom": "15px"}}>Name: {recipe.name}</h3>
                    <p className="type">Type: {recipe.type}</p>
                    <p className="type">Difficulty: {recipe.difficulty}</p>
                    <p className="type">Preparation time (minutes): {recipe.timeCooking}</p>

                    <p className="img-recipe-details"><img src={recipe.imageUrl}/></p>
                    <div className="actions">

                        {user._id && (user._id === recipe._ownerId
                                ? ownerButtons
                                : userButtons
                        )}

                        <div className="likes">
                            <img style={{"margin-top": "6px"}} className="hearts" src="/images/heart.png"/>
                            <span id="total-likes">Likes: {recipe.likes?.length || 0}</span>
                        </div>

                    </div>
                </div>
                <div className="recipe-description" style={{"margin-left": "50px"}}>
                    <h3 style={{"font-size": "25px"}}>Products</h3>
                    <p style={{"font-size": "18px"}}>{recipe.ingredients}</p>
                </div>
                <div className="recipe-description">
                    <h3 style={{"font-size": "25px"}}>Description</h3>
                    <p style={{"font-size": "18px"}}>{recipe.description}</p>
                </div>
            </section>
        </>
    );
}

export default DetailsRecipe;