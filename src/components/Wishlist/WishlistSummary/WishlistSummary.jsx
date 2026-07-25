import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
    FiHeart,
    FiShoppingCart,
    FiDollarSign,
    FiArrowRight,
} from "react-icons/fi";

import { useWishlist } from "../../../contexts/WishlistContext";

import "./WishlistSummary.css";

function WishlistSummary() {

    const { wishlist } = useWishlist();

    const totalItems = wishlist.length;

    const totalValue = wishlist.reduce((total, item) => {
        return total + Number(item.product.final_price || item.product.price || 0);
    }, 0);

    const inStock = wishlist.filter(
        (item) => item.product.in_stock
    ).length;

    return (

        <motion.section
            className="ws-summary"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
        >

            <div className="ws-summary-grid">

                <div className="ws-summary-card">

                    <div className="ws-summary-icon ws-summary-primary">
                        <FiHeart />
                    </div>

                    <div>
                        <p className="ws-summary-label">
                            Wishlist Items
                        </p>

                        <h3 className="ws-summary-value">
                            {totalItems}
                        </h3>
                    </div>

                </div>

                <div className="ws-summary-card">

                    <div className="ws-summary-icon ws-summary-success">
                        <FiDollarSign />
                    </div>

                    <div>
                        <p className="ws-summary-label">
                            Total Value
                        </p>

                        <h3 className="ws-summary-value">
                            ₹ {totalValue.toLocaleString()}
                        </h3>
                    </div>

                </div>

                <div className="ws-summary-card">

                    <div className="ws-summary-icon ws-summary-warning">
                        <FiShoppingCart />
                    </div>

                    <div>
                        <p className="ws-summary-label">
                            In Stock
                        </p>

                        <h3 className="ws-summary-value">
                            {inStock}
                        </h3>
                    </div>

                </div>

                <Link
                    to="/shop"
                    className="ws-summary-action"
                >

                    <span>
                        Continue Shopping
                    </span>

                    <FiArrowRight />

                </Link>

            </div>

        </motion.section>

    );

}

export default WishlistSummary;