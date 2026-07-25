import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";
import { useChatbotContext } from "../../chatbot/context/ChatbotContext";
import "./Hero.css";

function Hero() {
    const { openChat } = useChatbotContext();
    return (
        <section className="hero-section">

            <div className="container-custom hero-container">

                {/* Left */}

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                >

                    <span className="hero-badge">
                        🚀 AI Powered Shopping Experience
                    </span>

                    <h1>

                        Shop Smarter with

                        <span> AI ShopSphere</span>

                    </h1>

                    <p>

                        Discover premium products, personalized
                        recommendations, AI shopping assistant,
                        secure checkout and lightning-fast delivery.

                    </p>

                    <div className="hero-buttons">

                        <Link
                            className="primary-btn"
                            to="/shop"
                        >
                            Shop Now

                            <FiArrowRight />

                        </Link>

                        <button
                            type="button"
                            className="secondary-btn"
                            onClick={openChat}
                        >
                            <FiShoppingBag />
                            Explore AI
                        </button>

                    </div>

                    <div className="hero-stats">

                        <div>
                            <h2>50K+</h2>
                            <span>Products</span>
                        </div>

                        <div>
                            <h2>10K+</h2>
                            <span>Customers</span>
                        </div>

                        <div>
                            <h2>500+</h2>
                            <span>Brands</span>
                        </div>

                    </div>

                </motion.div>

                {/* Right */}

                <motion.div
    className="hero-image"
    initial={{ opacity: 0, x: 80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
>
    <div className="glass-card">

        <span className="hero-recommend-badge">
            AI Recommended
        </span>

        <h3>MacBook Pro M4</h3>

        <p>
            Based on your interests, this premium laptop offers exceptional
            performance for developers, creators, and professionals.
        </p>

        <div className="hero-product-price">
            ₹1,59,999
        </div>

        <Link
            to="/shop/macbook-pro-m4"
            className="hero-recommend-btn"
        >
            View Recommendation
        </Link>

    </div>
</motion.div>

            </div>

        </section>
    );
}

export default Hero;