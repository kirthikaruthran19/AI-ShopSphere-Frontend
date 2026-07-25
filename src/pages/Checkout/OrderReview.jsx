import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useCart } from "../../contexts/CartContext";
import { useOrder } from "../../contexts/OrderContext";

import {
    createRazorpayOrder,
    verifyPayment,
} from "../../services/paymentService";

import "./OrderReview.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function OrderReview({

    shippingData,

    paymentMethod,

}) {

    const navigate = useNavigate();

    const {

        cartItems,

        subtotal,

        shipping,

        tax,

        discount,

        grandTotal,

        loadCart,

    } = useCart();

    const {

        placeOrder,

        loading,

    } = useOrder();

    const validateShipping = () => {

        if (cartItems.length === 0) {

            toast.error("Your cart is empty.");

            return false;

        }

        const fullName =
            `${shippingData.first_name} ${shippingData.last_name}`.trim();

        if (fullName.length < 3) {

            toast.error("Please enter your full name.");

            return false;

        }

        if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                shippingData.email
            )
        ) {

            toast.error("Please enter a valid email address.");

            return false;

        }

        if (!/^[6-9]\d{9}$/.test(shippingData.phone)) {

            toast.error("Please enter a valid 10-digit phone number.");

            return false;

        }

        if (!shippingData.address || shippingData.address.trim().length < 10) {

            toast.error("Please enter a complete shipping address.");

            return false;

        }

        if (!shippingData.city.trim()) {

            toast.error("Please enter your city.");

            return false;

        }

        if (!shippingData.state.trim()) {

            toast.error("Please enter your state.");

            return false;

        }

        if (!/^\d{6}$/.test(shippingData.postal_code)) {

            toast.error("Please enter a valid 6-digit PIN code.");

            return false;

        }

        return true;

    };

    const handleCODOrder = async () => {

        try {

            await placeOrder({

                ...shippingData,

                payment_method: "cod",

            });

            await loadCart();

            toast.success("Order placed successfully!");

            navigate("/orders");

        } catch (error) {

            console.error(error);

        }

    };

    const handleRazorpayOrder = async () => {

        try {

            const order = await placeOrder({

                ...shippingData,

                payment_method: "razorpay",

            });

            const payment = await createRazorpayOrder(order.id);

            const options = {

                key: payment.key,

                amount: payment.amount,

                currency: payment.currency,

                name: "AI-ShopSphere",

                description: `Order ${payment.order_number}`,

                order_id: payment.order_id,

                handler: async function (response) {

                    try {

                        await verifyPayment({

                            razorpay_order_id:
                                response.razorpay_order_id,

                            razorpay_payment_id:
                                response.razorpay_payment_id,

                            razorpay_signature:
                                response.razorpay_signature,

                        });

                        toast.success("Payment Successful!");

                        await loadCart();

                        navigate("/orders");

                    } catch (error) {

                        console.error(error);

                        toast.error("Payment verification failed.");

                    }

                },

                prefill: {

                    name:
                        `${shippingData.first_name} ${shippingData.last_name}`,

                    email: shippingData.email,

                    contact: shippingData.phone,

                },

                notes: {

                    address: shippingData.address,

                },

                theme: {

                    color: "#0d6efd",

                },

                modal: {

                    ondismiss: function () {

                        toast.info("Payment cancelled.");

                    },

                },

            };

            const razorpay = new window.Razorpay(options);

            razorpay.open();

        } catch (error) {

            console.error(error);

            toast.error(

                error.response?.data?.message ||

                "Unable to initiate payment."

            );

        }

    };

    const handlePlaceOrder = async () => {

        if (!validateShipping()) return;

        if (paymentMethod === "cod") {

            await handleCODOrder();

            return;

        }

        await handleRazorpayOrder();

    };

    return (

        <div className="order-review-card">

            <h2>Order Review</h2>

            <div className="review-items">

                {cartItems.length === 0 ? (

                    <p>Your cart is empty.</p>

                ) : (

                    cartItems.map((item) => (

                        <div
                            className="review-item"
                            key={item.id}
                        >

                            <img
                                src={`${BASE_URL}${item.product_image}`}
                                alt={item.product_name}
                            />

                            <div className="review-info">

                                <h5>{item.product_name}</h5>

                                <p>

                                    Qty: {item.quantity}

                                </p>

                            </div>

                            <strong>

                                ₹{Number(item.subtotal).toLocaleString()}

                            </strong>

                        </div>

                    ))

                )}

            </div>

            <hr />

            <div className="price-row">

                <span>Subtotal</span>

                <span>₹{subtotal.toLocaleString()}</span>

            </div>

            <div className="price-row">

                <span>Shipping</span>

                <span>

                    {shipping === 0
                        ? "FREE"
                        : `₹${shipping.toLocaleString()}`}

                </span>

            </div>

            <div className="price-row">

                <span>Tax</span>

                <span>₹{tax.toLocaleString()}</span>

            </div>

            <div className="price-row">

                <span>Discount</span>

                <span>-₹{discount.toLocaleString()}</span>

            </div>

            <hr />

            <div className="grand-total">

                <span>Total</span>

                <strong>

                    ₹{grandTotal.toLocaleString()}

                </strong>

            </div>
            <div className="selected-payment">
                <span>Payment Method</span>
                <strong>
                    {paymentMethod === "cod"
                        ? "Cash on Delivery"
                        : "Razorpay"}
                </strong>
            </div>

            <button
                className="place-order-btn"
                onClick={handlePlaceOrder}
                disabled={loading || cartItems.length === 0}
            >

                {loading
                    ? "Please wait..."
                    : paymentMethod === "cod"
                        ? "Place Order"
                        : "Pay Securely"}

            </button>

        </div>

    );

}

export default OrderReview;