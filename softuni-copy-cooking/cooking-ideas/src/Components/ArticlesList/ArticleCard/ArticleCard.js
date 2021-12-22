import {Link} from 'react-router-dom';

const ArticleCard = ({
                        article
                    }) => {
    return (
        <li className="otherRecipe">

            <h3 className="name-article">{article.name}</h3>
            <p className="type-article">{article.type}</p>
            <p className="img"><img src={article.imageUrl}/></p>
            <Link className="button-article" to={`/details-article/${article._id}`}>Details</Link>
        </li>
    )

}

export default ArticleCard;