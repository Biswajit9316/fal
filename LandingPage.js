import React from 'react';
import { useState } from 'react';
import logo from '../assets/images/falcon-logo-1.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone } from '@fortawesome/free-solid-svg-icons';

import performance from '../assets/images/Performance.png'

import security from '../assets/images/Security.png'

import automation from '../assets/images/automation.png'

import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LoginPage from '../components/Login1'

import '../css/LandingPage.css'

const LandingPage = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };


    return (

        <div>

            <header className="top-header">

                <nav className="top-navbar">

                    <ul className="top-menu">

                        <li>

                            <span>

                                <FontAwesomeIcon icon={faPhone} />

                                <a href="#contact"> +1 (469) 756–0553</a>

                            </span>

                        </li>

                        <li>

                            <span>

                                <FaEnvelope />

                                <a href="#contact"> solutions@impactqa.com</a>

                            </span></li>

                        <li><a href="#contact">Case Studies</a></li>

                        <li><a href="#contact">Careers</a></li>

                    </ul>

                </nav>

            </header>

            <header className="header">

                <nav className="navbar">

                    <a href="#" className="logo">

                        <img src={logo} alt="Logo" />

                    </a>

                    <ul className="menu">

                        {/* <li><a href="#about">About</a></li>

            <li><a href="#services">Services</a></li> */}

                        {/* <li><a className="btn contactMnCTA" onClick={() => props.onFormSwitch('login')}>Login Here</a></li> */}
                        <Link className="btn contactMnCTA" to='/LoginPage' target="_blank" rel="noopener noreferrer">Login Here</Link>

                    </ul>

                </nav>

            </header>




            <section id="hero" className="hero">

                <div className="hero-content">

                    <h1>Falcon a low-code automation platform.</h1>

                    <h2>Simple. Cross Platform. Codeless.</h2>

                    <a href="#" className="btn contactMnCTA">Learn More</a>

                </div>

            </section>




            <section id="services" className="services">

                <div className="services-content">

                    <h2>Our Services</h2>

                    <div className="service-items">

                        <div className="service-item">

                            <img src={performance} alt="Service 1" />

                            <h3>Service 1</h3>

                            <p>To enhance the overall testing procedure and application quality, we conduct web automation testing.</p>

                            <a href="#" className="btn contactMnCTA">Learn More</a>

                        </div>

                        <div className="service-item">

                            <img src={security} alt="Service 2" />

                            <h3>Service 2</h3>

                            <p>Ethical hacking engagement specially designed to assess vulnerabilities within the design, architecture, and configuration.</p>

                            <a href="#" className="btn contactMnCTA">Learn More</a>

                        </div>

                        <div className="service-item">

                            <img src={automation} alt="Service 3" />

                            <h3>Service 3</h3>

                            <p>We validate the end-to-end business process powered by AI-automation to check its alignment with set business goals.</p>

                            <a href="#" className="btn contactMnCTA">Learn More</a>

                        </div>

                    </div>

                </div>

            </section>




            {/* <section id="about" className="about">

                <div className="about-content">

                    <div className="about-text">

                        <h2>About Us</h2>

                        <p>Top Software Testing and Product Development Company</p>

                        <p>ImpactQA is a global leader in next-generation software testing, QA Consulting, and Product Development. We help Fortune 500 companies across multiple industries such as Healthcare, E-learning, BFSI, Ecommerce, Media, Logistics, Real Estate, and more to deliver digital transformation and technology services, enabling global clients to stay ahead of the curve.</p>

                    </div>

                </div>

            </section> */}





            {/* <section id="contact" className="contact">

                <div className="contact-content">

                    <h2>Contact Us</h2>

                    <form>

                        <input type="text" placeholder="Your Name" />

                        <input type="email" placeholder="Your Email" />

                        <textarea placeholder="Your Message" />

                        <button type="submit">Submit</button>

                    </form>

                </div>

            </section> */}




            <footer className="footer">

                <p>&copy; 2023 ImpactQA. All rights reserved.</p>

                <p>Terms of Services</p>

                <p>Cookies Policies</p>

            </footer>

            
        </div>

    );

}




export default LandingPage;