import {useParams, useNavigate, Link} from "react-router-dom";
import * as articlesService from '../../services/articlesService';
import {useEffect, useState} from "react";

import {useAuthContext} from "../../contexts/AuthContext";
import ConfirmDialogArticle from '../../Components/CommonDirectory/ConfirmDialogArticle';
import {Button} from "react-bootstrap";
import useArticleState from "../../Hooks/useArticleState";
import {types, useNotificationContext} from "../../contexts/NotificationContext";
import * as likeArticle from "../../services/likeArticle";
import "./DetailsArticle.css";

const DetailsArticle = () => {
    const navigate = useNavigate();
    const {user} = useAuthContext();
    const {articleId} = useParams();
    const [article, setArticle] = useArticleState(articleId);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const {addNotification} = useNotificationContext();

    useEffect(() => {
        likeArticle.getArticleLikes(articleId)
            .then(likes => {
                setArticle(state => ({...state, likes}))
            })
    }, []);

    const deleteHandler = (e) => {
        e.preventDefault();

        articlesService.removeArticle(articleId, user.accessToken)
            .then(() => {
                addNotification('You successfully delete this article.', types.success);
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
        if (user._id === article._ownerId) {
            return;
        }
        if (article.likes.includes(user._id)) {
            addNotification('You already liked this article.', types.warn);
            return;
        }



        likeArticle.like(user._id, articleId)
            .then(() => {
                setArticle(state => ({...state, likes: [...state.likes, user._id]}));

                addNotification('You successfully liked this article.', types.success);
            });
    }


    const ownerButtons = (
        <>
            <Link className="button" to={`/edit-article/${article._id}`} style={{"background": "#d36161"}}>Edit</Link>
            <a className="button" href="#" onClick={deleteClickHandler} style={{"background": "#d36161"}}>Delete</a>
        </>
    );

    const userButtons = (
        <>
            <Button className="button" onClick={likeButtonClick}
                    disabled={article.likes?.includes(user._id)}
                    style={{"background-color": "#efee65", "color": "black"}}>Like</Button>
        </>
    )

    return (
        <>
            <ConfirmDialogArticle show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)}
                                  onSave={deleteHandler}/>
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
                            <span id="total-likes">Likes: {article.likes?.length || 0}</span>
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