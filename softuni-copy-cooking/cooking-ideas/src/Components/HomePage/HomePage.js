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
                    <p><b>phone:</b>  0031 5534 861 </p>
                    <br/>
                </div>
                <div className="card-person">
                    <img className="image-team"
                         src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                         alt=""/>
                    <h5>James Johnson</h5>
                    <p className="profession">Moderator</p>
                    <p className="p-card-info">Contact Info</p>
                    <p><b>email:</b>  james.johnson@gmail.com</p>
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

            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe id="gmap_canvas"
                            src="https://maps.google.com/maps?q=Atanas%20Ishirkov%20
                            St%201000%20Sofia%20Center,%20Sofia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    />
                    <a href="https://putlocker-is.org"/><br></br>
                    <a href="https://www.embedgooglemap.net">embedded google search</a>
                </div>
            </div>

            {/*<form*/}
            {/*    // action="mailto:contact@yourdomain.com"*/}
            {/*    //   method="POST"*/}
            {/*    //   encType="multipart/form-data"*/}
            {/*      name="EmailForm">*/}

            {/*    Name:*/}
            {/*    /!*<input type="text" size="19" name="ContactName">Message:*!/*/}
            {/*    /!*    <textarea name="ContactCommentt" rows="6" cols="20"/>*!/*/}
            {/*    /!*    <input type="submit" value="Submit"/>*!/*/}
            {/*    /!*</input>*!/*/}
            {/*</form>*/}


            <div className="container-contact">
                <form action="/action_page.php">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="first-name" name="firstname" placeholder="Your name.."/>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="last-name" name="lastname" placeholder="Your last name.."/>

                    <label htmlFor="country">Country</label>
                    <select id="country" name="country">
                        <option value="australia">Bulgaria</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                        <option value="usa">France</option>
                        <option value="usa">Italy</option>

                    </select>

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."/>

                    <input id="submit-contact" type="submit" value="Submit"/>
                </form>
            </div>

        </>
    );
}
export default HomePage;