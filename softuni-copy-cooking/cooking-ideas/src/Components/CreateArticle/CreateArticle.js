import * as recipesService from '../../services/recipesService';
import {useNavigate} from "react-router-dom";

const CreateArticle = () => {
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
        }).then(result => {
            navigate('/dashboard');
        });
    }

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onArticleCreate} method="POST">
                <fieldset>
                    <legend>Add new Article</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="fruit">Fruit</option>
                                <option value="vegetable">Vegetable</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Article"/>
                </fieldset>
            </form>
        </section>
    );
}

export default CreateArticle;