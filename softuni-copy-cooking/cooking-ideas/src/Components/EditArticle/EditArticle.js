import useArticleState from '../../Hooks/useArticleState';
import {useParams} from "react-router-dom";
import "./EditArticle.css";

const types = [
    {value: 'fruit', text: 'Fruit'},
    {value: 'vegetable', text: 'Vegetable'},
    {value: 'herbs', text: 'Herbs'},
    {value: 'other-article', text: 'Other'},
    {value: 'dessert', text: 'Dessert'}
];

const EditArticle = () => {
    const {articleId} = useParams();
    const [article, setArticle] = useArticleState(articleId);

    const articleEditSubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" method="POST" onSubmit={articleEditSubmitHandler}>
                <fieldset>
                    <legend>Edit my Article</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" defaultValue={article.name}/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description"
                                      id="description" defaultValue={article.description}/></span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={article.imageUrl}/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" value={article.type}>
                                {types.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}

                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Save"/>
                </fieldset>
            </form>
        </section>
    );
}

export default EditArticle;