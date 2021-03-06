import useArticleState from '../../Hooks/useArticleState';
import {useNavigate, useParams} from "react-router-dom";
import "./EditArticle.css";
import {useState} from "react";
import {Alert} from "react-bootstrap";
import * as articlesService from "../../services/articlesService";
import {useNotificationContext} from "../../contexts/NotificationContext";

const types = [
    {value: 'fruit', text: 'Fruit'},
    {value: 'vegetable', text: 'Vegetable'},
    {value: 'herbs', text: 'Herbs'},
    {value: 'other-article', text: 'Other'},
];

const EditArticle = () => {
    const {articleId} = useParams();
    const navigate = useNavigate();

    const [article, setArticle] = useArticleState(articleId);
    const [type, setType] = useState(article.type);

    const [errors, setErrors] = useState({name: false});
    const [errorsDescription, setErrorsDescription] = useState({name: false});

    const {addNotification} = useNotificationContext();

    const articleEditSubmitHandler = (e) => {
        e.preventDefault();
        let articleData = Object.fromEntries(new FormData(e.currentTarget));
        articlesService.update(article._id, articleData);
        addNotification('You successfully edit this article.', types.success);
        navigate(`/details-article/${article._id}`);
    }

    const nameChangeHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 3) {
            setErrors(state => ({...state, name: "Name of article should be at least 2 characters!"}));
        } else {
            setErrors(state => ({...state, name: false}));
        }
    }
    const descriptionChangeHandler = (e) => {
        let currentDescription = e.target.value;

        if (currentDescription.length < 10) {
            setErrorsDescription(state => ({
                ...state,
                name: "Description of article should be at least 10 characters!"
            }))
        } else {
            setErrorsDescription(state => ({...state, name: false}));
        }
    }
    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" method="POST" onSubmit={articleEditSubmitHandler}>
                <fieldset style={{"box-shadow": "0 0 1rem 0.1rem rgb(211, 97, 97)"}}>
                    <legend style={{
                        "text-align": "center",
                        "width": "101%",
                        "font-size": "15px",
                        "font-weight": "bold"
                    }}>Edit my Article
                    </legend>

                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input" style={{borderColor: errors.name ? 'blue' : 'inherit'}}>
                            <input type="text" name="name" id="name" defaultValue={article.name}
                                   onBlur={nameChangeHandler}/>
                        </span>
                        <Alert variant="primary" show={errors.name}>{errors.name}</Alert>
                    </p>

                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input" style={{borderColor: errorsDescription.name ? 'blue' : 'inherit'}}>
                            <textarea name="description"
                                      id="description" defaultValue={article.description}
                                      onBlur={descriptionChangeHandler}
                            />
                        </span>
                        <Alert variant="primary" show={errorsDescription.name}>{errorsDescription.name}</Alert>
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
                            <select id="type" name="type" value={article.type}
                                    onChange={(e) => setArticle(s =>
                                        ({...s, type: e.target.value}))}>
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