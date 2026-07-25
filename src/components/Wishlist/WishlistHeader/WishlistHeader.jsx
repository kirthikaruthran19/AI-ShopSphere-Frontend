import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FiHeart } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi2";

import { useWishlist } from "../../../contexts/WishlistContext";

import "./WishlistHeader.css";

function WishlistHeader() {

    const { wishlistCount } = useWishlist();

    return (

        <motion.section
            className="ws-header"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >

            <div className="ws-header-overlay"></div>

            <div className="ws-header-content">

                <div className="ws-header-left">

                    <div className="ws-header-icon">

                        <FiHeart />

                    </div>

                    <div>

                        <h1 className="ws-header-title">
                            My Wishlist
                        </h1>

                        <p className="ws-header-subtitle">
                            Save your favourite products and purchase them later.
                        </p>

                    </div>

                </div>

                <div className="ws-header-right">

                    <div className="ws-header-count">

                        <span className="ws-count-number">
                            {wishlistCount}
                        </span>

                        <span className="ws-count-label">
                            Items
                        </span>

                    </div>

                </div>

            </div>

            <div className="ws-breadcrumb">

                <Link to="/" className="ws-breadcrumb-link">

                    <HiOutlineHome />

                    Home

                </Link>

                <span className="ws-breadcrumb-divider">/</span>

                <span className="ws-breadcrumb-current">
                    Wishlist
                </span>

            </div>

        </motion.section>

    );

}

export default WishlistHeader;