import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaHeart,
    FaTruck,
    FaUndo,
    FaShieldAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";

import QuantitySelector from "../QuantitySelector/QuantitySelector";

import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import "./ProductInfo.css";
function ProductInfo({ product }) {

    const navigate = useNavigate();

    const { addToCart } = useCart();

    const {
        addItem,
        removeItem,
        isWishlisted,
    } = useWishlist();

    const {
        id,
        name,
        brand,
        category,
        sku,
        description,
        price,
        discount_price,
        stock,
    } = product;

    const wishlisted = isWishlisted(id);

    const [quantity, setQuantity] = useState(1);
    const [cartLoading, setCartLoading] = useState(false);
    const [wishlistLoading, setWishlistLoading] = useState(false);

    const finalPrice = discount_price || price;

    // =============================
    // Add To Cart
    // =============================
    const handleAddToCart = async () => {

        try {

            setCartLoading(true);

            await addToCart(id, quantity);

            toast.success("Product added to cart");

        } catch (error) {

            console.error(error);

            toast.error("Unable to add product to cart");

        } finally {

            setCartLoading(false);

        }

    };

    // =============================
    // Buy Now
    // =============================
    const handleBuyNow = async () => {

        try {

            setCartLoading(true);

            await addToCart(id, quantity);

            navigate("/checkout");

        } catch (error) {

            console.error(error);

            toast.error("Unable to continue");

        } finally {

            setCartLoading(false);

        }

    };

    // =============================
    // Wishlist
    // =============================
    const handleWishlist = async () => {

    try {

        setWishlistLoading(true);

        if (wishlisted) {

            await removeItem(id);

            toast.success("Removed from Wishlist");

        } else {

            await addItem(id);

            toast.success("Added to Wishlist");

        }

    } catch (error) {

        console.error(error);

        toast.error("Unable to update wishlist");

    } finally {

        setWishlistLoading(false);

    }

};

    return (

        <div className="product-info">

            {brand && (
                <span className="brand-badge">
                    {brand}
                </span>
            )}

            <h1>{name}</h1>

            <div className="product-meta">

                {category && (
                    <span>
                        Category :
                        <strong> {category.name || category}</strong>
                    </span>
                )}

                {sku && (
                    <span>
                        SKU :
                        <strong> {sku}</strong>
                    </span>
                )}

            </div>

            <div className="price-section">

                <span className="current-price">
                    ₹{Number(finalPrice).toLocaleString()}
                </span>

                {discount_price && (
                    <span className="old-price">
                        ₹{Number(price).toLocaleString()}
                    </span>
                )}

            </div>

            <div className="stock-status">

                {stock > 0 ? (
                    <span className="in-stock">
                        In Stock ({stock})
                    </span>
                ) : (
                    <span className="out-stock">
                        Out of Stock
                    </span>
                )}

            </div>

            <p className="description">
                {description}
            </p>

            <QuantitySelector
                quantity={quantity}
                setQuantity={setQuantity}
                max={stock}
            />

            <div className="action-buttons">

                <button
                    className="btn btn-primary btn-lg"
                    onClick={handleAddToCart}
                    disabled={cartLoading || stock <= 0}
                >
                    {cartLoading ? "Adding..." : "Add to Cart"}
                </button>

                <button
                    className="btn btn-dark btn-lg"
                    onClick={handleBuyNow}
                    disabled={cartLoading || stock <= 0}
                >
                    Buy Now
                </button>

                <button
    className={`wishlist-btn ${
        wishlisted ? "active" : ""
    }`}
    onClick={handleWishlist}
    disabled={wishlistLoading}
    title={
        wishlisted
            ? "Remove from Wishlist"
            : "Add to Wishlist"
    }
>
    <FaHeart />
</button>

            </div>

            <div className="delivery-info">

                <div>
                    <FaTruck />
                    <span>Free Delivery</span>
                </div>

                <div>
                    <FaUndo />
                    <span>7 Days Return</span>
                </div>

                <div>
                    <FaShieldAlt />
                    <span>Secure Payment</span>
                </div>

            </div>

        </div>

    );

}

export default ProductInfo;