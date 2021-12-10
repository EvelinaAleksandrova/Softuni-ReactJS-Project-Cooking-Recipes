const MyArticlesPage = () => {
    return (
        <section id="my-recipes-page" className="my-recipes">
            <h1>My Articles</h1>
<h2>On this page you will find useful information about the various fruits and vegetables.</h2>
            <ul className="my-recipes-list">
                <li className="otherRecipe">
                    <h3>Name: Beans</h3>
                    <p>Type: vegetable</p>
                    <p className="img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKwII1nYEGyx7gw0scSD0xmPYBXs-xW2ltw&usqp=CAU"/></p>
                    <a className="button" href="#">Details</a>
                </li>
                <li className="otherRecipe">
                    <h3>Name: Beans</h3>
                    <p>Type: vegetable</p>
                    <p className="img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKwII1nYEGyx7gw0scSD0xmPYBXs-xW2ltw&usqp=CAU"/></p>
                    <a className="button" href="#">Details</a>
                </li>
                <li className="otherRecipe">
                    <h3>Name: Beans</h3>
                    <p>Type: vegetable</p>
                    <p className="img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKwII1nYEGyx7gw0scSD0xmPYBXs-xW2ltw&usqp=CAU"/></p>
                    <a className="button" href="#">Details</a>
                </li>
            </ul>


            <p className="no-recipes">You don't create any recipes!</p>
        </section>
    );
}

export default MyRecipesPage;
