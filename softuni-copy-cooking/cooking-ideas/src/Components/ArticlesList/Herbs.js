import ArticleCard from "./ArticleCard/ArticleCard";
import {useEffect, useState} from "react";
import * as articlesService from '../../services/articlesService';

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
                article.length > 0
                    ? (
                        <ul className="other-recipes-list">


                            {
                                article.filter(article => article.type === 'herbs').map(article =><ArticleCard key={article._id} article={article}/>)
                            }
                        </ul>
                    )
                    : <p className="no-recipes">No herbs articles in database!</p>
            }
        </>
    )

}

export default Herbs;