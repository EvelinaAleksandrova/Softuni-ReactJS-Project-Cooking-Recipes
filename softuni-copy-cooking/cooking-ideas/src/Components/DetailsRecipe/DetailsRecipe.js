import {useParams,useNavigate,Link} from "react-router-dom";
import * as recipesService from '../../services/recipesService';
import {useState, useEffect,useContext} from "react";
import "./DetailsRecipe.css";
import {AuthContext} from "../../contexts/AuthContext";


const DetailsRecipe = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const [recipe, setRecipe] = useState({});
    const {recipeId} = useParams();

    useEffect(() => {
        recipesService.getOne(recipeId)
            .then(recipeResult=>{
                setRecipe(recipeResult);
            })

    }, [recipeId]);

    const deleteHandler = (e) => {
        e.preventDefault();
        recipesService.removeRecipe(recipeId).then(res=>{
            navigate('/all-recipes');
        })
    }

    const ownerButtons = (
        <>
            <Link className="button" to="/edit">Edit</Link>
            <a className="button" href="#" onClick={deleteHandler}>Delete</a>
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

                    {user._id && (user._id === recipe._ownerId
                            ?ownerButtons
                            :  userButtons
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