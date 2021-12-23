import {useState, useEffect} from "react";

import * as articlesService from '../services/articlesService';

export const useArticleState = (articleId) => {
    const [article, setArticle] = useState({});

    useEffect(() => {
        articlesService.getOne(articleId)
            .then(articleResult => {
                setArticle(articleResult);
            })

    }, [articleId]);
    return [
        article,
        setArticle
    ]
}
export default useArticleState;