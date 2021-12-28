import {useParams, useNavigate, Link} from "react-router-dom";
import * as articlesService from '../../services/articlesService';
import {useState} from "react";
import "./DetailsArticle.css";
import {useAuthContext} from "../../contexts/AuthContext";
import ConfirmDialogArticle from '../../Components/CommonDirectory/ConfirmDialogArticle';
import {Button} from "react-bootstrap";
import useArticleState from "../../Hooks/useArticleState";


const DetailsArticle = () => {
    const navigate = useNavigate();
    const {user} = useAuthContext();
    const {articleId} = useParams();
    const [article, setArticle] = useArticleState(articleId);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const deleteHandler = (e) => {
        e.preventDefault();
        articlesService.removeArticle(articleId, user.accessToken)
            .then(() => {
                navigate('/all-articles');
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
        if (article.likes.includes(user._id)) {
            console.log("User already liked article!");
            return;
        }

        let likes = [...article.likes, user._id];
        let likedArticle = {...article, likes}

        articlesService.likeArticle(article._id, likedArticle, user.accessToken)
            .then(() => {
                setArticle(state => ({
                    ...state,
                    likes,
                }))
            })
    }


    const ownerButtons = (
        <>
            <Link className="button" to={`/edit-article/${article._id}`} style={{"background": "#d36161"}}>Edit</Link>
            <a className="button" href="#" onClick={deleteClickHandler} style={{"background": "#d36161"}}>Delete</a>
        </>
    );

    const userButtons = (
        <>
            <Button className="button" onClick={likeButtonClick} style={{"background-color":"#ffd505", "color":"black"}}>Like</Button>
        </>
    )

    return (
        <>
            <ConfirmDialogArticle show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler}/>
            <section id="details-page" className="details">
                <div className="article-information">
                    <h3 style={{"margin-bottom": "12px"}}>Name: {article.name}</h3>
                    <p className="type">Type: {article.type}</p>
                    <p className="img-article-details"><img src={article.imageUrl}/></p>
                    <div className="actions">
                        {user._id && (user._id === article._ownerId
                                ? ownerButtons
                                : userButtons
                        )
                        }
                        <div className="likes">
                            <img style={{"margin-top": "8px"}} className="hearts" src="/images/heart.png"/>
                            <span id="total-likes">Likes: {article.likes?.length}</span>
                        </div>
                    </div>
                </div>
                <div className="article-description">
                    <h3>Description:</h3>
                    <p>{article.description}</p>
                </div>
            </section>
        </>
    );
}

export default DetailsArticle;