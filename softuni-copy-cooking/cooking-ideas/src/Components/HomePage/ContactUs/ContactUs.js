import {useState} from "react";
import {send} from "emailjs-com";
import "./ContactUs.css"

const ContactUs = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        text: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_jjdxk6h',
            'template_ytdixfl',
            toSend,
            'user_OjWdAt65fgQMHPymyPbiK'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);

            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };

    const resetInputFields = () => {
        setTimeout(() => {
            document.getElementById("name").value = "";
            document.getElementById("email-form").value = "";
            document.getElementById("text").value = "";
        }, 300);

    };
    return (
        <>
            <h3 className="contact-us-h3">Contact Us</h3>

            <div className="contact-us">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe id="gmap_canvas"
                                src="https://maps.google.com/maps?q=Sofia,ul%20Solunska%2016&t=&z=13&ie=UTF8&iwloc=&output=embed"/>
                        <a href="https://putlocker-is.org"/>
                    </div>
                </div>

                <div className="container-contact">
                    <p className="p-in-email-us">Email us</p>
                    <form className="form-contact-active" onSubmit={onSubmit}>
                        <label id="text-names" htmlFor="fname">Name</label>
                        <input type="text" id="name" name="from_name" placeholder="Your name.."
                               value={toSend.from_name}
                               onChange={handleChange}
                               required
                        />
                        <label id="text-names" htmlFor="email">Email</label>
                        <input type="text" id="email-form" name="reply_to" placeholder="Your email address.."
                               value={toSend.reply_to}
                               onChange={handleChange}
                               required
                        />
                        <label id="text-names" htmlFor="subject">Subject</label>
                        <textarea id="text" name="text" placeholder="Write something.."
                                  value={toSend.text}
                                  onChange={handleChange}
                                  required
                        />
                        <input id="submit-contact" type="submit" value="Send Email" onClick={resetInputFields}/>
                    </form>
                </div>
            </div>

            <div className="more-info-contact-us">
                <p><b>Address:</b>&nbsp;Bulgaria, Sofia, Center, ul."Solunska" 16, floor 2</p>
                <p><b>Phone Office:</b>&nbsp;0032 1258 566</p>
                <p><b>Work time:</b>&nbsp;Monday to Friday 10:00-18:00</p>
            </div>
        </>
    );
}
export default ContactUs;