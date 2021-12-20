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
                <p className="p-about-us">About Us Page</p>
                <h5>We love cooking, eating, and connecting with people from around the world.</h5>
                <h5>Take a look through thousands of recipes on our website,
                    where you’ll also find all the information you need about your favourite food.</h5>

            </div>

            <h2 className="our-team-h3">Our Team</h2>
            <div className="team">
                <div className="card-person">
                    <img className="image-team"
                         src="https://t4.ftcdn.net/jpg/03/30/25/97/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x.jpg"
                         alt=""/>
                    <h5>Olivia Williams</h5>
                    <p className="profession">CEO & Founder</p>
                    <p className="p-card-info">Contact Info</p>
                    <p><b>email:</b> olivia.williams@gmail.com</p>
                    <p><b>phone:</b> 0031 5534 861 </p>
                    <br/>
                </div>
                <div className="card-person">
                    <img className="image-team"
                         src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                         alt=""/>
                    <h5>James Johnson</h5>
                    <p className="profession">Moderator</p>
                    <p className="p-card-info">Contact Info</p>
                    <p><b>email:</b> james.johnson@gmail.com</p>
                    <p><b>phone:</b> 0011 0034 863 </p>
                    <br/>
                </div>
                <div className="card-person">
                    <img className="image-team"
                         src="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
                         alt=""/>
                    <h5>Emma Miller</h5>
                    <p className="profession">Designer</p>
                    <p className="p-card-info">Contact Info</p>
                    <p><b>email:</b> emma.miller@gmail.com</p>
                    <p><b>phone:</b>0021 1234 567 </p>
                    <br/>
                </div>

            </div>

            <div className="little-color-space"/>

            <h3 className="contact-us-h3">Contact Us</h3>
            <div className="contact-us">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe id="gmap_canvas"
                                src="https://maps.google.com/maps?q=Sofia,ul%20Solunska%2016&t=&z=13&ie=UTF8&iwloc=&output=embed"/>
                        <a href="https://putlocker-is.org"/><br></br>
                    </div>
                    <div className="more-info-contact-us">
                        <p><b>Address:</b>&nbsp;Bulgaria, Sofia, Center, ul."Solunska" 16, floor 2</p>
                        <p><b>Phone Office:</b>&nbsp;0032 1258 566</p>
                        <p><b>Work time:</b>&nbsp;Monday to Friday 10:00-18:00</p>
                    </div>
                </div>


                <div className="container-contact">
                    <form action="/action_page.php">
                        <label id="text-names" htmlFor="fname">First Name</label>
                        <input type="text" id="first-name" name="firstname" placeholder="Your name.."/>

                        <label id="text-names" htmlFor="lname">Last Name</label>
                        <input type="text" id="last-name" name="lastname" placeholder="Your last name.."/>

                        <label id="text-names" htmlFor="lname">Last Name</label>
                        <input type="text" id="last-name" name="lastname" placeholder="Your last name.."/>

                        <label id="text-names" htmlFor="country">Country</label>
                        <select id="country" name="country">
                            <option value="australia">Bulgaria</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                            <option value="usa">France</option>
                            <option value="usa">Italy</option>

                        </select>

                        <label id="text-names" htmlFor="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."/>

                        <input id="submit-contact" type="submit" value="Send Email"/>
                    </form>
                </div>


            </div>

        </>
    );
}
export default HomePage;