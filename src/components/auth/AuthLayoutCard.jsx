import { motion } from "framer-motion";
import "./AuthLayoutCard.css";

function AuthLayoutCard({ title, subtitle, children }) {
    return (
        <div className="auth-page">

            {/* Animated Background */}
            <div className="auth-bg">
                <div className="blob blob1"></div>
                <div className="blob blob2"></div>
                <div className="blob blob3"></div>
            </div>

            <div className="container">

                <div className="row justify-content-center align-items-center min-vh-100">

                    {/* Left Side */}

                    <motion.div
                        className="col-lg-6 d-none d-lg-flex"
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                    >

                        <div className="auth-left">

                            <span className="badge bg-light text-dark px-3 py-2 mb-4">
                                AI Powered Shopping
                            </span>

                            <h1>
                                Shop Smarter
                                <br />
                                with AI
                            </h1>

                            <p>
                                Discover premium products with personalized
                                recommendations powered by artificial
                                intelligence.
                            </p>

                            <div className="feature-list">

                                <div>✔ Secure Authentication</div>

                                <div>✔ AI Recommendations</div>

                                <div>✔ Fast Checkout</div>

                                <div>✔ Smart Shopping Experience</div>

                            </div>

                        </div>

                    </motion.div>

                    {/* Right Side */}

                    <motion.div
                        className="col-lg-5 col-md-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .8 }}
                    >

                        <div className="glass-card">

                            <h2>{title}</h2>

                            <p className="text-muted mb-4">
                                {subtitle}
                            </p>

                            {children}

                        </div>

                    </motion.div>

                </div>

            </div>

        </div>
    );
}

export default AuthLayoutCard;