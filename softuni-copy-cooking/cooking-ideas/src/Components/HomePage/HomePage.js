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
            <div className="container-of-team">


                <div className="card-person">
                    <p>Hello</p>
                    <img className="image-person" src="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"/>
                </div>

                <div className="card-person2">
                    <p>Hello</p>
                    <img className="image-person" src="team-photos/Screenshot%202021-12-17%20213311.png"/>
                </div>
                <div className="card-person3">
                    <p>Hello</p>
                    <img className="image-person" src=""/>
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