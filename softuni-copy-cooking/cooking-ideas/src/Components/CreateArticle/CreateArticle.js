import * as articlesService from '../../services/articlesService';
import {useNavigate} from "react-router-dom";
import {useAuthContext} from "../../contexts/AuthContext";
import {useState} from "react";
import {Alert} from "react-bootstrap";

const CreateArticle = () => {
    const {user} = useAuthContext();
    const navigate = useNavigate();

    const [errors, setErrors] = useState({name: false});
    const [errorsDescription, setErrorsDescription] = useState({name: false});

    const onArticleCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');

        articlesService.create({
            name,
            description,
            imageUrl,
            type
        }, user.accessToken)
            .then(result => {
            navigate('/all-articles');
        });
    }
    const nameChangeHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 2) {
            setErrors(state => ({...state, name: "Name of article should be at least 2 characters!"}))
        } else {
            setErrors(state => ({...state, name: false}));
        }
    }
    const descriptionChangeHandler = (e) => {
        let currentDescription = e.target.value;

        if (currentDescription.length < 10) {
            setErrorsDescription(state => ({...state, name: "Description of article should be at least 10 characters!"}))
        } else {
            setErrorsDescription(state => ({...state, name: false}));
        }
    }
    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onArticleCreate} method="POST">
                <fieldset style={{"box-shadow":"0 0 1rem 0.1rem rgb(211, 97, 97)"}}>
                    <legend style={{"text-align": "center", "width": "101%", "font-size": "15px", "font-weight":"bold"}}>Add new Article</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input"  style={{borderColor: errors.name ? 'red' : 'inherit'}}>
                            <input type="text" name="name" id="name" placeholder="Name"
                                   required onBlur={nameChangeHandler}
                            />
                        </span>
                        <Alert variant="warning" show={errors.name}>{errors.name}</Alert>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input"  style={{borderColor: errors.name ? 'red' : 'inherit'}}>
                            <textarea name="description" id="description" placeholder="Description"
                                      required onBlur={descriptionChangeHandler}
                            />
                        </span>
                        <Alert variant="warning" show={errorsDescription.name}>{errorsDescription.name}</Alert>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" required/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="fruit">Fruit</option>
                                <option value="vegetable">Vegetable</option>
                                <option value="herbs">Herbs</option>
                                 <option value="other-article">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Article" style={{"background":"#d36161"}}/>
                </fieldset>
            </form>
        </section>
    );
}

export default CreateArticle;