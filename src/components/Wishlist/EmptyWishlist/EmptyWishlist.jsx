import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FiArrowRight, FiHeart } from "react-icons/fi";

import "./EmptyWishlist.css";

function EmptyWishlist() {

    return (

        <motion.section
            className="ws-empty"
            initial={{
                opacity: 0,
                scale: 0.96,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 0.45,
            }}
        >

            <motion.div
                className="ws-empty-icon"
                animate={{
                    scale: [1, 1.12, 1],
                    rotate: [0, -8, 8, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >

                <FiHeart />

            </motion.div>

            <h2 className="ws-empty-title">
                Your Wishlist is Empty
            </h2>

            <p className="ws-empty-description">
                You haven't added any products yet.
                Browse our collection and save your favourite items to your wishlist.
            </p>

            <Link
                to="/shop"
                className="ws-empty-button"
            >

                Continue Shopping

                <FiArrowRight />

            </Link>

        </motion.section>

    );

}

export default EmptyWishlist;