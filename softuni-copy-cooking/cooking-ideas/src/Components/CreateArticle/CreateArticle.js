import * as articlesService from '../../services/articlesService';
import {useNavigate} from "react-router-dom";
import {useAuthContext} from "../../contexts/AuthContext";

const CreateArticle = () => {
    const {user} = useAuthContext();
    const navigate = useNavigate();

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

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onArticleCreate} method="POST">
                <fieldset>
                    <legend style={{"text-align": "center","width":"94%", "font-size":"20px"}}>Add new Article</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" required/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description" required/>
                        </span>
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