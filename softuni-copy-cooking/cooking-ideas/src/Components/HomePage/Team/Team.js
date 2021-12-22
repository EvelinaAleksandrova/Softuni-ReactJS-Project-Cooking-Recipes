import './Team.css';
const Team = () => {
    return (
        <>
            <h2 className="our-team-h3">Our Team</h2>
            <div className="team">
                <div className="card-person">
                    <img className="image-team"
                         src="https://t4.ftcdn.net/jpg/03/30/25/97/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x.jpg"
                         alt=""/>
                    <h3>Olivia Williams</h3>
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
                    <h3>James Johnson</h3>
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
                    <h3>Emma Miller</h3>
                    <p className="profession">Designer</p>
                    <p className="p-card-info">Contact Info</p>
                    <p><b>email:</b> emma.miller@gmail.com</p>
                    <p><b>phone:</b>0021 1234 567 </p>
                    <br/>
                </div>
            </div>
        </>
    );
}
export default Team;