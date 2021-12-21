import {useParams} from "react-router-dom";
import * as recipesService from '../../services/articlesService';
import {useState, useEffect, useContext} from "react";
import "./DetailsArticle.css";
import {AuthContext} from "../../contexts/AuthContext";

const DetailsArticle = () => {
    const {user} = useContext(AuthContext);
    const [article, setArticle] = useState({});
    const {articleId} = useParams();

    useEffect(async () => {
        let articleResult = await recipesService.getOne(articleId);
        setArticle(articleResult);
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
            <div className="article-information">
                <h3>Name: {article.name}</h3>
                <p className="type">Type: {article.type}</p>
                <p className="img"><img src={article.imageUrl}/></p>
                <div className="actions">
                    {user._id && (user._id === articleId._ownerId
                        ? ownerButtons
                        : userButtons)
                    }

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png"/>
                        <span id="total-likes">Likes: {article.likes}</span>
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