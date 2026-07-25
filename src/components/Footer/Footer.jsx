import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
    FiFacebook,
    FiInstagram,
    FiTwitter,
    FiLinkedin,
    FiMail,
    FiPhone,
    FiMapPin,
    FiSend,
} from "react-icons/fi";

import "./Footer.css";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="container-custom">

                <div className="footer-grid">

                    {/* Company */}

                    <motion.div
                        className="footer-column"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >

                        <h2 className="footer-logo">
                            AI-ShopSphere
                        </h2>

                        <p>
                            AI-powered shopping platform delivering premium
                            products, personalized recommendations,
                            secure checkout, and a seamless shopping
                            experience.
                        </p>

                        <div className="footer-social">

                            <a href="#">
                                <FiFacebook />
                            </a>

                            <a href="#">
                                <FiInstagram />
                            </a>

                            <a href="#">
                                <FiTwitter />
                            </a>

                            <a href="#">
                                <FiLinkedin />
                            </a>

                        </div>

                    </motion.div>

                    {/* Quick Links */}

                    <motion.div
                        className="footer-column"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >

                        <h4>Quick Links</h4>

                        <Link to="/">Home</Link>

                        <Link to="/shop">Shop</Link>

                        <Link to="/cart">Cart</Link>

                        <Link to="/wishlist">Wishlist</Link>

                        <Link to="/orders">Orders</Link>

                    </motion.div>

                    {/* Support */}

                    <motion.div
                        className="footer-column"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >

                        <h4>Support</h4>

                        <Link to="/profile">Profile</Link>

                        <Link to="/faq">FAQs</Link>

                        <Link to="/shipping-policy">
                            Shipping Policy
                        </Link>

                        <Link to="/privacy-policy">
                            Privacy Policy
                        </Link>

                        <Link to="/terms">
                            Terms & Conditions
                        </Link>

                    </motion.div>

                    {/* Contact */}

                    <motion.div
                        className="footer-column"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >

                        <h4>Contact</h4>

                        <div className="footer-contact">

                            <span>
                                <FiMail />
                                support@aishopsphere.com
                            </span>

                            <span>
                                <FiPhone />
                                +91 98765 43210
                            </span>

                            <span>
                                <FiMapPin />
                                Chennai, Tamil Nadu
                            </span>

                        </div>

                        <div className="newsletter">

                            <input
                                type="email"
                                placeholder="Your Email"
                            />

                            <button>

                                <FiSend />

                            </button>

                        </div>

                    </motion.div>

                </div>

                <div className="footer-bottom">

                    <p>

                        © {year} AI-ShopSphere.
                        All Rights Reserved.

                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;