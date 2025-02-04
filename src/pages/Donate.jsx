import '../css/donate.css';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from "../components/BackToTop";
import PageHeader from '../components/PageHeader';
import { useState } from 'react';

export default function Donate() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState(100);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your donation intention!");
    };

    return (
        <>
            <Navbar />
            <PageHeader title={"Donate Now"} path={"/donate"} name={"Donate"} />

            <div className="donations">
                <div className="container">
                    <div className="donate">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="donate-content">
                                    <div className="section-header">
                                        <p>Donate Now</p>
                                        <h2>Let's donate to needy people for better lives</h2>
                                    </div>
                                    <div className="donate-text">
                                        <p>
                                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non. Aliquam metus tortor, auctor id gravida, viverra quis sem. Curabitur non nisl nec nisi maximus. Aenean convallis porttitor. Aliquam interdum at lacus non blandit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="donate-form">
                                    <form onSubmit={handleSubmit}>
                                        <div className="control-group">
                                            <input 
                                                onChange={(e) => setName(e.target.value)} 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Name" 
                                            />
                                        </div>
                                        <div className="control-group">
                                            <input 
                                                onChange={(e) => setEmail(e.target.value)} 
                                                type="email" 
                                                className="form-control" 
                                                placeholder="Email" 
                                            />
                                        </div>
                                        <div className="btn-group" role="group">
                                            <input type="radio" name="btnradio" id="btnradio1" defaultChecked 
                                                onChange={() => setAmount(100)} />
                                            <label htmlFor='btnradio1' className="btn btn-custom btn-outline-warning">
                                                ₦ 1000
                                            </label>

                                            <input type="radio" name="btnradio" id="btnradio2" 
                                                onChange={() => setAmount(500)} />
                                            <label htmlFor='btnradio2' className="btn btn-custom btn-outline-warning">
                                                ₦ 5000
                                            </label>

                                            <input type="radio" name="btnradio" id="btnradio3" 
                                                onChange={() => setAmount(1000)} />
                                            <label htmlFor='btnradio3' className="btn btn-custom btn-outline-warning">
                                                ₦ 10000
                                            </label>
                                        </div>
                                        <div>
                                            <button className="btn btn-custom" type="submit">
                                                Show Support
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <BackToTop />
        </>
    );
}