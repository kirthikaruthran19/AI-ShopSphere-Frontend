import "./OrderSummaryCard.css";
import { FiCreditCard } from "react-icons/fi";

function OrderSummaryCard({
    subtotal = 0,
    shipping = 0,
    tax = 0,
    discount = 0,
    total = 0,
    itemCount = 0,
    onCheckout,
}) {
    return (
        <div className="order-summary-card">

            <div className="order-summary-header">
                <h5>Order Summary</h5>
                <span>{itemCount} Item(s)</span>
            </div>

            <div className="summary-body">

                <div className="summary-row">
                    <span>Subtotal</span>
                    <strong>₹{subtotal.toLocaleString()}</strong>
                </div>

                <div className="summary-row">
                    <span>Shipping</span>
                    <strong>
                        {shipping === 0
                            ? "Free"
                            : `₹${shipping.toLocaleString()}`}
                    </strong>
                </div>

                <div className="summary-row">
                    <span>Tax</span>
                    <strong>₹{tax.toLocaleString()}</strong>
                </div>

                {discount > 0 && (
                    <div className="summary-row discount">
                        <span>Discount</span>
                        <strong>
                            -₹{discount.toLocaleString()}
                        </strong>
                    </div>
                )}

            </div>

            <div className="summary-total">

                <span>Total</span>

                <h4>
                    ₹{total.toLocaleString()}
                </h4>

            </div>

            <button
                className="summary-checkout-btn"
                onClick={onCheckout}
            >
                <FiCreditCard />
                Proceed to Payment
            </button>

        </div>
    );
}

export default OrderSummaryCard;