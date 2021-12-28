import ArticleCard from "./ArticleCard/ArticleCard";
import "./ArticleList.css";

const ArticlesList = ({article}) => {

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