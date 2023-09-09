import './contact.css';
const Contact= () =>{
    return(
    <>
        <section className="contact-sec sec-pad section">
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <div className="contact-detail">
                <h3 className="section-title text-start m-0">Contact us</h3>

                <ul className="contact-ul">
                    <li><i className="fa fa-location-dot"></i> 91, Ram Nagar, Ram Mandir, Delhi</li>

                    <li>
                    <i className="fa fa-phone"></i>
                    Phone
                    {/* <a href="tel:08510004495"><b>0255000XXXX</b></a>,
                    <a href="tel:08510005495"><b>0251600XXXX</b></a> */}
                    </li>

                    <li>
                    <i className="fa-solid fa-envelope"></i>
                    mail id
                    {/* <a href="mailto:pardeepkumar4bjp@gmail.com"><b> demounknown@gmail.com</b></a> */}
                    </li>
                </ul>
                </div>
            </div>

            <div className="col-md-6">
                <form className="formContact">
                <div className="row">
                    <div className="col-sm-6">
                    <input type="text" name="name" placeholder="Your Name" className="inptFld" required />
                    </div>

                    <div className="col-sm-6">
                    <input type="email" name="email" placeholder="Email Address" className="inptFld" required />
                    </div>

                    <div className="col-sm-6">
                    <input type="tel" name="phone" placeholder="Phone Number" className="inptFld" required />
                    </div>

                    <div className="col-sm-6">
                    <input type="text" name="sub" placeholder="Subject" className="inptFld" required />
                    </div>

                    <div className="col-12">
                    <textarea className="inptFld" rows="" cols="" placeholder="Your Message..." required></textarea>
                    </div>

                    <div className="col-12">
                    <input type="submit" name="submit" value="SUBMIT" className="inptBtn" />
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </section>
    </>
    )
}

export default Contact;