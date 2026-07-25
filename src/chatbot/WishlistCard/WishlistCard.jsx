import "./WishlistCard.css";
import { FiHeart, FiShoppingCart, FiTrash2 } from "react-icons/fi";

function WishlistCard({
    product,
    onView,
    onMoveToCart,
    onRemove,
}) {

    if (!product) return null;

    const image = product.thumbnail
        ? `http://127.0.0.1:8000${product.thumbnail}`
        : "/images/placeholder.png";

    return (
        <div className="wishlist-card">

            <div className="wishlist-image-container">

                <img
                    src={image}
                    alt={product.name}
                    className="wishlist-image"
                />

            </div>

            <div className="wishlist-content">

                <span className="wishlist-category">
                    {product.category}
                </span>

                <h6 className="wishlist-title">
                    {product.name}
                </h6>

                <div className="wishlist-price">
                    ₹{Number(product.price).toLocaleString()}
                </div>

                <div className="wishlist-actions">

                    <button
                        className="wishlist-view-btn"
                        onClick={onView}
                    >
                        View
                    </button>

                    <button
                        className="wishlist-cart-btn"
                        onClick={onMoveToCart}
                    >
                        <FiShoppingCart />
                    </button>

                    <button
                        className="wishlist-remove-btn"
                        onClick={onRemove}
                    >
                        <FiTrash2 />
                    </button>

                </div>

            </div>

            <div className="wishlist-favorite">
                <FiHeart />
            </div>

        </div>
    );
}

export default WishlistCard;