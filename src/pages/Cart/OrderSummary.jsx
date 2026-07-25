import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../contexts/CartContext";

import "./OrderSummary.css";

function OrderSummary() {

    const {
        subtotal,
        shipping,
        tax,
        discount,
        grandTotal,
        coupon,
        applyCoupon,
        totalItems,
    } = useCart();

    const [couponInput, setCouponInput] = useState("");

    const handleApplyCoupon = () => {

        if (!couponInput.trim()) {

            toast.error("Please enter a coupon code.");

            return;

        }

        const result = applyCoupon(couponInput);

        if (result.success) {

            toast.success(result.message);

            setCouponInput("");

        } else {

            toast.error(result.message);

        }

    };

    return (

        <div className="order-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">

                <span>Items</span>

                <span>{totalItems}</span>

            </div>

            <div className="summary-row">

                <span>Subtotal</span>

                <span>

                    ₹{Number(subtotal).toFixed(2)}

                </span>

            </div>

            <div className="summary-row">

                <span>Shipping</span>

                <span>

                    {shipping === 0
                        ? "FREE"
                        : `₹${Number(shipping).toFixed(2)}`}

                </span>

            </div>

            <div className="summary-row">

                <span>Tax (5%)</span>

                <span>

                    ₹{Number(tax).toFixed(2)}

                </span>

            </div>

            <div className="summary-row">

                <span>Discount</span>

                <span>

                    -₹{Number(discount).toFixed(2)}

                </span>

            </div>

            <hr />

            <div className="coupon-section">

                <label>

                    Coupon Code

                </label>

                <div className="coupon-input">

                    <input
                        type="text"
                        placeholder="Enter Coupon Code"
                        value={couponInput}
                        onChange={(e) =>
                            setCouponInput(e.target.value)
                        }
                        onKeyDown={(e) => {

                            if (e.key === "Enter") {

                                handleApplyCoupon();

                            }

                        }}
                    />

                    <button
                        onClick={handleApplyCoupon}
                        disabled={!couponInput.trim()}
                    >

                        Apply

                    </button>

                </div>

                {coupon && (

                    <div className="coupon-success">

                        ✅ Applied Coupon:

                        <strong>

                            {" "}{coupon}

                        </strong>

                    </div>

                )}

            </div>

            <hr />

            <div className="summary-total">

                <span>Total</span>

                <strong>

                    ₹{Number(grandTotal).toFixed(2)}

                </strong>

            </div>

            <Link
                to={totalItems > 0 ? "/checkout" : "#"}
                className={`checkout-button ${totalItems === 0 ? "disabled" : ""}`}
                onClick={(e) => {

                    if (totalItems === 0) {

                        e.preventDefault();

                        toast.error("Your cart is empty.");

                    }

                }}
            >

                Proceed to Checkout

            </Link>

            <Link
                to="/shop"
                className="continue-shopping-btn"
            >

                Continue Shopping

            </Link>

        </div>

    );

}

export default OrderSummary;