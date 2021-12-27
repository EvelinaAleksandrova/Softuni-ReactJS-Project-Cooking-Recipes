import ArticleCard from "../ArticleCard/ArticleCard";
import {useEffect, useState} from "react";
import * as articlesService from '../../../services/articlesService';
import "../ArticleList.css";

const Herbs = () => {

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
                article.filter(article => article.type === 'herbs').length > 0
                    ? (
                        <ul className="other-recipes-list">
                            {
                                article.filter(article => article.type === 'herbs').map(article =><ArticleCard key={article._id} article={article}/>)
                            }
                        </ul>
                    )
                    : <p className="no-articles">No herbs articles yet!</p>
            }
        </>
    )

}

export default Herbs;