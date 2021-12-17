import './HomePage.css';

const HomePage = () => {

    return (
        <>
            <div className="home-image">
                <p className="p-on-home-image">
                    Cooking<br/>
                    Ideas
                </p>
            </div>
            <div className="about-us-image">
                <p className="p-on-about-us-image">
                    Enjoy delicious food with the tips of Cooking Ideas.<br/>
                    Cook with thousands of people from all over the
                    world!
                </p>
            </div>

            <div className="about-section">
                <h1>About Us Page</h1>
                <h4>We love cooking, eating, and connecting with people from around the world.</h4>
                <h4>Take a look through thousands of recipes on our website,
                    where you’ll also find all the information you need about your favourite food.</h4>

            </div>

            <h2>Our Team</h2>
            <div className="team">
                <div className="card-person">
                    <img className="image-team" src="https://t4.ftcdn.net/jpg/03/30/25/97/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x.jpg"
                         alt=""/>
                    <h3>Olivia Williams</h3>
                    <p className="profession">CEO & Founder</p>
                    <p>Email: olivia.williams@gmail.com</p>
                    <p>Phone: 0031 5534 861 </p>
                    <br/>
                </div>
                <div className="card-person">
                    <img className="image-team" src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                         alt=""/>
                    <h3>James Johnson</h3>
                    <p  className="profession">Moderator</p>
                    <p>Email: james.johnson@gmail.com</p>
                    <p>Phone: 0011 0034 863 </p>
                    <br/>
                </div>
                <div className="card-person">
                    <img className="image-team" src="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
                         alt=""/>
                    <h3>Emma Miller</h3>
                    <p  className="profession">Designer</p>
                    <p>Email: emma.miller@gmail.com</p>
                    <p>Phone: 0021 1234 567 </p>
                    <br/>
                </div>

            </div>

        </>
    );
}
export default HomePage;