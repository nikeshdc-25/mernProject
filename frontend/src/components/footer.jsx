import { Container } from "react-bootstrap";
import './footer.css';
import { FaGithub, FaFacebookF , FaInstagram } from "react-icons/fa";

function Footer(){
    let currentYear = new Date().getFullYear();
    return(
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h3>Contact Me</h3>
                            <p>Email: nikeshdhakal25@gmail.com</p>
                            <p>Phone: +977 9848050240</p>
                        </div>
                        <div class="col-md-4">
                            <h3>Follow Me</h3>
                            <ul class="social-icons">
                                <li><a href="https://github.com/nikeshdc-25"><FaGithub /></a></li>
                                <li><a href="https://facebook.com/nikeshdhakal25"><FaFacebookF /></a></li>
                                <li><a href="https://instagram.com/nikkey_25"><FaInstagram /></a></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h3>Quick Links</h3>
                            <ul class="footer-links">
                                <li><a href="#">Home</a></li>
                                <li><a href="../About/aboutme.html">About Me</a></li>
                                <li><a href="tel:+9779848050240"><i class="fas fa-phone"></i> Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p class="text-center">© {currentYear} Ecom. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer;