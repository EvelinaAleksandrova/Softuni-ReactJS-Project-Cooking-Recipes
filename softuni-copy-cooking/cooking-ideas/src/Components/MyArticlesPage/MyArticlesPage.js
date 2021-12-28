import {useEffect, useState} from "react";
import {useAuthContext} from "../../contexts/AuthContext";
import * as articlesService from "../../services/articlesService";
import ArticlesList from "../ArticlesList/ArticlesList";

const MyArticlesPage = () => {

    const [article, setArticle] = useState([]);
    const {user} = useAuthContext();

    useEffect(() => {
        articlesService.getMyArticles(user._id)
            .then(Result => {
                setArticle(Result);
            });
    }, []);

    return (
        <section id="my-recipes-page" className="my-recipes">
            <h1>My Articles</h1>
            {
                article.length > 0
                    ? <ArticlesList article={article}/>
                    : <p className="no-recipes">You don't create any articles!</p>
            }

        </section>
    );
}

export default MyArticlesPage;
