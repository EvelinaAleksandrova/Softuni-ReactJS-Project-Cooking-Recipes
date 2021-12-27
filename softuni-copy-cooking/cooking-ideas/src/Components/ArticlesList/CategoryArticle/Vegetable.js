import ArticleCard from "../ArticleCard/ArticleCard";
import {useEffect, useState} from "react";
import * as articlesService from '../../../services/articlesService';
import "../ArticleList.css";

const Vegetable = () => {

    const [article, setArticle] = useState([]);
    useEffect(() => {
        articlesService.getAll()
            .then(result => {
                setArticle(result);
            });
    }, []);

    return (
        <>
            {
                article.filter(article => article.type === 'vegetable').length > 0
                    ? (
                        <ul className="other-recipes-list">
                            {
                                article.filter(article => article.type === 'vegetable').map(article =><ArticleCard key={article._id} article={article}/>)
                            }
                        </ul>
                    )
                    : <p className="no-articles">No vegetable articles yet!</p>
            }
        </>
    )

}

export default Vegetable;