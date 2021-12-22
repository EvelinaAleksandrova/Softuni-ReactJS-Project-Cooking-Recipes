const MyArticlesPage = () => {
    return (
        <section id="my-recipes-page" className="my-recipes">
            <h1>My Articles</h1>
            <ul className="my-recipes-list">
                <li className="otherRecipe">
                    <h3>Name: Mint</h3>
                    <p>Type: herbs</p>
                    <p className="img"><img src="data:image/jpeg;base64,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"/></p>
                    <a className="button" href="#" style={{"background":"#d36161"}}>Details</a>
                </li>
            </ul>


            <p className="no-recipes">You don't create any articles!</p>
        </section>
    );
}

export default MyArticlesPage;
