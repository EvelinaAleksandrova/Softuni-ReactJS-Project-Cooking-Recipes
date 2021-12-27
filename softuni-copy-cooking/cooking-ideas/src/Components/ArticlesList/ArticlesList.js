import ArticleCard from "./ArticleCard/ArticleCard";
import {useEffect, useState} from "react";
import * as articlesService from '../../services/articlesService';
import "./ArticleList.css";

const ArticlesList = () => {

    const [article, setArticle] = useState([]);
    useEffect(() => {
        articlesService.getAll()
            .then(result => {
                setArticle(result);
            })
            .catch(error=>{
                console.log(error);
            })
    }, []);

    return (
        <>
            {
                article.length > 0
                    ? (
                        <ul className="other-recipes-list">
                            {
                                article.map(article => <ArticleCard key={article._id} article={article}/>)
                            }
                        </ul>
                    )
                    : <p className="no-articles">No articles yet!</p>
            }
        </>
    )

}

export default ArticlesList;