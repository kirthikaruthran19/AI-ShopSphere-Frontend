import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
    FiShoppingCart,
    FiTrash2,
    FiShoppingBag,
    FiCheckCircle,
    FiXCircle,
} from "react-icons/fi";

import { useWishlist } from "../../../contexts/WishlistContext";
import { useCart } from "../../../contexts/CartContext";

import "./WishlistCard.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function WishlistCard({ item }) {

    const { removeItem } = useWishlist();
    const { addToCart } = useCart();

    const { product } = item;

    const image =
        product.thumbnail
            ? `${BASE_URL}${product.thumbnail}`
            : "/images/product-placeholder.png";

    const handleMoveToCart = async () => {
        await addToCart(product.id);
        await removeItem(product.id);
    };

    return (

        <motion.article
            className="ws-card"
            whileHover={{
                y: -8,
            }}
            transition={{
                duration: 0.25,
            }}
        >

            {/* Product Image */}

           <Link
    to={`/shop/${product.slug}`}
    className="ws-card-image-wrapper"
>

                <img
                    src={image}
                    alt={product.name}
                    className="ws-card-image"
                />

                {
                    product.discount_price && (

                        <span className="ws-card-badge">

                            Sale

                        </span>

                    )
                }

            </Link>

            {/* Content */}

            <div className="ws-card-content">

                <p className="ws-card-brand">
                    {product.brand}
                </p>

                <Link
    to={`/shop/${product.slug}`}
    className="ws-card-title"
>
    {product.name}
</Link>

                <div className="ws-card-stock">

                    {
                        product.in_stock ? (
                            <>
                                <FiCheckCircle />
                                <span>In Stock</span>
                            </>
                        ) : (
                            <>
                                <FiXCircle />
                                <span>Out of Stock</span>
                            </>
                        )
                    }

                </div>

                <div className="ws-card-price">

                    <span className="ws-card-final-price">
                        ₹ {Number(product.final_price).toLocaleString()}
                    </span>

                    {
                        product.discount_price && (

                            <span className="ws-card-original-price">

                                ₹ {Number(product.price).toLocaleString()}

                            </span>

                        )
                    }

                </div>

                {/* Actions */}

                <div className="ws-card-actions">

                    <button
                        className="ws-btn-cart"
                        onClick={handleMoveToCart}
                    >

                        <FiShoppingCart />

                        Move to Cart

                    </button>
<Link
    to={`/shop/${product.slug}`}
    className="ws-btn-buy"
>
    <FiShoppingBag />
    Buy Now
</Link>

                </div>

                <button
                    className="ws-btn-remove"
                    onClick={() => removeItem(product.id)}
                >

                    <FiTrash2 />

                    Remove

                </button>

            </div>

        </motion.article>

    );

}

export default WishlistCard;