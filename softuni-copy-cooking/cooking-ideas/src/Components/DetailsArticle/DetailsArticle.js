import {useParams, useNavigate, Link} from "react-router-dom";
import * as articlesService from '../../services/articlesService';
import {useState, useEffect} from "react";
import "./DetailsArticle.css";
import { useAuthContext} from "../../contexts/AuthContext";

const DetailsArticle = () => {
    const navigate = useNavigate();
    const {user} = useAuthContext();
    const [article, setArticle] = useState({});
    const {articleId} = useParams();

    useEffect(() => {
        articlesService.getOne(articleId)
            .then(articleResult => {
                setArticle(articleResult);
            })

    }, [articleId]);

    const deleteHandler = (e) => {
        e.preventDefault();
        articlesService.removeArticle(articleId, user.accessToken).then(res => {
            navigate('/all-articles');
        })
    }
    const ownerButtons = (
        <>
            <Link className="button" to="/edit" style={{"background":"#d36161"}}>Edit</Link>
            <a className="button" href="#" onClick={deleteHandler} style={{"background":"#d36161"}}>Delete</a>
        </>
    );

    const userButtons = (
        <>
            <a className="button" href="#">Like</a>
        </>
    )

    return (
        <section id="details-page" className="details">
            <div className="article-information">
                <h3 style={{"margin-bottom":"12px"}}>Name: {article.name}</h3>
                <p className="type">Type: {article.type}</p>
                <p className="img-article-details"><img src={article.imageUrl}/></p>
                <div className="actions">
                    {user._id && (user._id === article._ownerId
                            ? ownerButtons
                            : userButtons
                    )
                    }

                    <div className="likes">
                        <img style={{"margin-top":"8px"}} className="hearts" src="/images/heart.png"/>
                        <span id="total-likes">Likes: {article.likes?.length}</span>
                    </div>

                </div>
            </div>
            <div className="article-description">
                <h3>Description:</h3>
                <p>{article.description}</p>
            </div>
        </section>
    );
}

export default DetailsArticle;