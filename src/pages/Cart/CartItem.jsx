import {
    FiMinus,
    FiPlus,
    FiTrash2,
} from "react-icons/fi";

import { useCart } from "../../contexts/CartContext";

import "./CartItem.css";

const API_URL = "http://127.0.0.1:8000";

function CartItem({ item }) {

    const {
        increaseQuantity,
        decreaseQuantity,
        removeItem,
    } = useCart();

    const image =
        item?.product_image
            ? item.product_image.startsWith("http")
                ? item.product_image
                : `${API_URL}${item.product_image}`
            : "/images/no-image.png";

    return (

        <div className="cart-item">

            <div className="cart-product">

                <img
                    src={image}
                    alt={item?.product_name || "Product"}
                    loading="lazy"
                    onError={(e) => {
                        e.target.src = "/images/no-image.png";
                    }}
                />

                <div className="cart-details">

                    <h3>
                        {item?.product_name || "Unknown Product"}
                    </h3>

                    <p>
                        {item?.product_slug || ""}
                    </p>

                    <span className="stock">
                        In Stock
                    </span>

                </div>

            </div>

            <div className="cart-price">

                ₹{Number(item?.price || 0).toFixed(2)}

            </div>

            <div className="cart-quantity">

                <button
                    aria-label="Decrease quantity"
                    onClick={() =>
                        decreaseQuantity(
                            item.id,
                            item.quantity
                        )
                    }
                >
                    <FiMinus />
                </button>

                <span>
                    {item.quantity}
                </span>

                <button
                    aria-label="Increase quantity"
                    onClick={() =>
                        increaseQuantity(
                            item.id,
                            item.quantity
                        )
                    }
                >
                    <FiPlus />
                </button>

            </div>

            <div className="cart-total">

                ₹{Number(item?.subtotal || 0).toFixed(2)}

            </div>

            <button
                className="remove-item"
                aria-label="Remove item"
                onClick={() => removeItem(item.id)}
            >
                <FiTrash2 />
            </button>

        </div>

    );

}

export default CartItem;