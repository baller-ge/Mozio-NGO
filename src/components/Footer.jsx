import '../css/footer.css';

export default function Footer() {
    return (
        < div className="footer" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-contact">
                            <h2>Contact Us</h2>
                            <a href="https://maps.app.goo.gl/HQg6gMPpAJ445cda6" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-map-marker-alt"></i>No. 55 Egbengu, Nteje, Oyi Local Government Area, Anambra State, Nigeria.</p></a>
                            <a href="tel:+234-9074402446"><p><i className="fa fa-phone"></i>+234-9074402446</p></a>
                            <a href="mailto:visitourchildsfoundation@gmail.com"><p><i className="fa fa-envelope"></i>visitourchildsfoundation@gmail.com</p></a>
                            <div className="footer-social">
                                <a className="btn btn-custom" href="https://x.com/Visit_OCPF2025/status/1964054552044605742?t=iB4eLZsuEsO6oCOWrYGGDw&s=19"><i className="fab fa-x-twitter"></i></a>
                                <a className="btn btn-custom" href="https://www.facebook.com/share/r/167TfJL6gG/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-custom" href="https://www.instagram.com/p/DOO56HhE0Tb/?igsh=MWt2cjYxYjRyam5y"><i className="fab fa-instagram"></i></a>
                                {/* <a className="btn btn-custom" href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-custom" href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Popular Links</h2>
                            <a href="/about">About Us</a>
                            <a href="/contact">Contact Us</a>
                            <a href="/event">Popular Causes</a>
                            <a href="/event">Upcoming Events</a>
                            <a href="/">Latest Blog</a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-link">
                            <h2>Useful Links</h2>
                            <a href="/">Terms Of Use</a>
                            <a href="/">Privacy Policy</a>
                            <a href="/">Cookies</a>
                            <a href="/">Help</a>
                            <a href="/">FAQs</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <form name='NewsLetter'>
                                <input name='subscribe' className="form-control" placeholder="Email goes here" autoComplete='email' required/>
                                <button className="btn btn-custom">Submit</button>
                                <h6>Don't worry, we don't spam!</h6>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <a href="/">OUR CHILD'S PRIMAL FOUNDATION</a> | 2026, All Right Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Designed With ❤️ By <a href="https://www.linkedin.com">TOMORROW</a></p>
                    </div>
                </div>
            </div>
        </ div>
    );
}