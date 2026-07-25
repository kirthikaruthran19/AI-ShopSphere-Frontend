import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";

import "./ProductCard.css";

function ProductCard({ product }) {

    const { addToCart } = useCart();

    const {
        addItem,
        removeItem,
        isWishlisted,
    } = useWishlist();

    const finalPrice =
        product.discount_price || product.price;

    const wishlisted = isWishlisted(product.id);

    const handleWishlist = async (e) => {

        e.preventDefault();
        e.stopPropagation();

        try {

            if (wishlisted) {

                await removeItem(product.id);

                toast.success("Removed from Wishlist");

            } else {

                await addItem(product.id);

                toast.success("Added to Wishlist");

            }

        } catch {

            toast.error("Something went wrong");

        }

    };

    const handleCart = async (e) => {

        e.preventDefault();
        e.stopPropagation();

        try {

            await addToCart(product.id);

            toast.success("Added to Cart");

        } catch {

            toast.error("Unable to add product");

        }

    };

    return (

        <motion.div
            className="pc-card"
            whileHover={{ y: -8 }}
            transition={{ duration: .25 }}
        >

            <button
                className="pc-heart"
                onClick={handleWishlist}
            >

                {
                    wishlisted
                        ? <FaHeart />
                        : <FiHeart />
                }

            </button>

            {
                product.discount_price && (

                    <span className="pc-badge">

                        SALE

                    </span>

                )
            }

            <Link
                to={`/shop/${product.slug}`}
                className="pc-link"
            >

                <div className="pc-image">

                    <img
                        src={product.thumbnail}
                        alt={product.name}
                        loading="lazy"
                    />

                </div>

                <div className="pc-content">

                    <p className="pc-brand">

                        {product.brand || "AI ShopSphere"}

                    </p>

                    <h5>

                        {product.name}

                    </h5>

                    <div className="pc-price">

                        <span className="pc-current">

                            ₹{Number(finalPrice).toLocaleString()}

                        </span>

                        {
                            product.discount_price && (

                                <span className="pc-old">

                                    ₹{Number(product.price).toLocaleString()}

                                </span>

                            )
                        }

                    </div>

                    <button
                        className="pc-cart-btn"
                        onClick={handleCart}
                    >

                        <FiShoppingCart />

                        Add to Cart

                    </button>

                </div>

            </Link>

        </motion.div>

    );

}

export default ProductCard;