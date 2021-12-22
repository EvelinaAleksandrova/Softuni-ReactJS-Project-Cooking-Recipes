import {useParams, useNavigate, Link} from "react-router-dom";
import * as articlesService from '../../services/articlesService';
import {useState, useEffect, useContext} from "react";
import "./DetailsArticle.css";
import {AuthContext} from "../../contexts/AuthContext";

const DetailsArticle = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
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
            <div className="article-information">
                <h3>Name: {article.name}</h3>
                <p className="type">Type: {article.type}</p>
                <p className="img"><img src={article.imageUrl}/></p>
                <div className="actions">
                    {user._id && (user._id === article._ownerId
                            ? ownerButtons
                            : userButtons
                    )
                    }

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png"/>
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