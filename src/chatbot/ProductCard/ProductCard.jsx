import "./ProductCard.css";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

function ProductCard({
    image,
    name,
    category,
    brand,
    price,
    originalPrice,
    inStock,
    onView,
    onCart,
    onWishlist,
}) {
    return (
        <div className="chat-product-card">

            <div className="chat-product-image-wrapper">

                <img
                    src={
                        image ||
                        "https://placehold.co/300x300?text=No+Image"
                    }
                    alt={name}
                    className="chat-product-image"
                />

            </div>

            <div className="chat-product-content">

                <span className="chat-product-category">
                    {category}
                </span>

                <h6 className="chat-product-title">
                    {name}
                </h6>

                {brand && (
                    <div className="chat-product-brand">
                        {brand}
                    </div>
                )}

                <div className="chat-product-price">

                    {originalPrice &&
                        originalPrice !== price && (
                            <span
                                className="chat-product-original-price"
                            >
                                ₹{originalPrice}
                            </span>
                        )}

                    <h5>
                        ₹{price}
                    </h5>

                </div>

                <div className="chat-product-stock">

                    {inStock ? (
                        <span className="in-stock">
                            In Stock
                        </span>
                    ) : (
                        <span className="out-stock">
                            Out of Stock
                        </span>
                    )}

                </div>

                <div className="chat-product-actions">

                    <button
                        className="chat-view-btn"
                        onClick={onView}
                    >
                        View Product
                    </button>

                    <button
                        className="chat-icon-btn"
                        onClick={onCart}
                    >
                        <FiShoppingCart />
                    </button>

                    <button
                        className="chat-icon-btn"
                        onClick={onWishlist}
                    >
                        <FiHeart />
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ProductCard;