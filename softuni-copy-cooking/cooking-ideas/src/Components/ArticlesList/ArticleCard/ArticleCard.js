import {Link} from 'react-router-dom';

const ArticleCard = ({
                        article
                    }) => {
    return (
        <li className="otherRecipe">

            <h3>{article.name}</h3>
            <p>{article.type}</p>
            <p className="img"><img src={article.imageUrl}/></p>
            <Link className="button" to={`/details/${article._id}`}>Details</Link>
        </li>
    )

}

export default ArticleCard;