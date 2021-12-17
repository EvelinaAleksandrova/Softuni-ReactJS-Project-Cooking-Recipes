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
                    Cook with thousands of chefs from all over the
                    world!
                </p>
            </div>

            {/*<div className="contact-us-image">*/}

            {/*    <p className="p-on-contact-us-image">*/}
            {/*        Enjoy delicious food with the tips of Cooking Ideas.<br/>*/}
            {/*        Cook with thousands of chefs from all over the*/}
            {/*        world!*/}
            {/*    </p>*/}
            {/*</div>*/}

            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
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


            {/*        <div className="container mb-4">*/}
            {/*            <iframe*/}
            {/*                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11*/}
            {/*283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!*/}
            {/*1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNe*/}
            {/*w+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452"*/}
            {/*            />*/}
            {/*        </div>*/}

        </>
    );
}
export default HomePage;