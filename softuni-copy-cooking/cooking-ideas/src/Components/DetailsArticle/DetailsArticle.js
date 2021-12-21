import {useParams} from "react-router-dom";
import * as recipesService from '../../services/articlesService';
import {useState, useEffect} from "react";
import "./DetailsArticle.css";


const DetailsArticle = () => {
    const [article, setArticle] = useState({});
    const {articleId} = useParams();

    useEffect(async () => {
        let articleResult = await recipesService.getOne(articleId);
        setArticle(articleResult);
    }, []);

    return (
        <section id="details-page" className="details">
            <div className="article-information">
                <h3>Name: {article.name}</h3>
                <p className="type">Type: {article.type}</p>
                <p className="img"><img src={article.imageUrl}/></p>
                <div className="actions">

                    <a className="button" href="#">Edit</a>
                    <a className="button" href="#">Delete</a>

                    <a className="button" href="#">Like</a>


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