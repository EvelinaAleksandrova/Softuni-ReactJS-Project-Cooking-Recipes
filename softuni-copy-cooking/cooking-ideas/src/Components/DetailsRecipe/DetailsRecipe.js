import {useParams, useNavigate, Link} from "react-router-dom";
import * as recipesService from '../../services/recipesService';
import {useState, useEffect} from "react";
import "./DetailsRecipe.css";
import {useAuthContext} from "../../contexts/AuthContext";
import ConfirmDialog from '../../Components/CommonDirectory/ConfirmDialog';

const DetailsRecipe = () => {
    const navigate = useNavigate();
    const {user} = useAuthContext();
    const [recipe, setRecipe] = useState({});
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const {recipeId} = useParams();

    useEffect(() => {
        recipesService.getOne(recipeId)
            .then(recipeResult => {
                setRecipe(recipeResult);
            })

    }, [recipeId]);

    const deleteHandler = (e) => {
        e.preventDefault();
        recipesService.removeRecipe(recipeId, user.accessToken)
            .then(()=> {
                navigate('/all-recipes');
            })
            .finally(()=>{
                setShowDeleteDialog(false);
            });


    }
    const deleteClickHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(true);
    }

    const ownerButtons = (
        <>
            <Link className="button" to="/edit" style={{"background": "#d36161"}}>Edit</Link>
            <a className="button" href="#" onClick={deleteClickHandler} style={{"background": "#d36161"}}>Delete</a>
        </>
    );

    const userButtons = (
        <>
            <a className="button" id="deleteRecipeNow" href="#" style={{"background": "#d36161"}}>Like</a>
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
                            <span id="total-likes">Likes: {recipe.likes?.length}</span>
                        </div>

                    </div>
                </div>
                <div className="recipe-description">
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