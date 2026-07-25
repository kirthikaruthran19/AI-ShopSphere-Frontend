import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getOrderTracking } from "../../services/trackingService";

import TrackingTimeline from "../../components/Tracking/TrackingTimeline";
import StatusBadge from "../../components/Tracking/StatusBadge";
import DeliveryEstimate from "../../components/Tracking/DeliveryEstimate";

import "./OrderTracking.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function OrderTracking() {

    const { id } = useParams();

    const [order, setOrder] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        fetchOrderTracking();

    }, [id]);

    async function fetchOrderTracking() {

        try {

            setLoading(true);

            setError("");

            const data = await getOrderTracking(id);

            setOrder(data);

        } catch (err) {

            console.error(err);

            setError("Unable to load order tracking.");

        } finally {

            setLoading(false);

        }

    }

    const formatPrice = (price) => {

        return `₹${Number(price).toLocaleString("en-IN")}`;

    };

    const formatDate = (date) => {

        return new Date(date).toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
        });

    };

    if (loading) {

        return (

            <div className="loading-container">

                <h3>Loading Order Tracking...</h3>

            </div>

        );

    }

    if (error) {

        return (

            <div className="empty-container">

                <h3>{error}</h3>

            </div>

        );

    }

    if (!order) {

        return (

            <div className="empty-container">

                <h3>Order not found.</h3>

            </div>

        );

    }

    return (

        <div className="tracking-page">

            <h2>Track Your Order</h2>

            <h4>

                Order Number : {order.order_number}

            </h4>

            <StatusBadge status={order.status} />

            <DeliveryEstimate status={order.status} />

            <div className="order-summary">

                <div className="summary-card">

                    <h5>Current Status</h5>

                    <p>{order.status}</p>

                </div>

                <div className="summary-card">

                    <h5>Payment Status</h5>

                    <p>{order.payment_status}</p>

                </div>

                <div className="summary-card">

                    <h5>Payment Method</h5>

                    <p>{order.payment_method.toUpperCase()}</p>

                </div>

                <div className="summary-card">

                    <h5>Total Items</h5>

                    <p>{order.total_items}</p>

                </div>

            </div>

            <TrackingTimeline

                tracking={order.tracking_history}

                currentStatus={order.status}

            />

            <div className="order-items">

                <h3>Ordered Products</h3>

                {order.items?.map((item) => (

                    <div

                        key={item.id}

                        className="item-card"

                    >

                        <img

                            src={
                                item.product_image
                                    ? `${BASE_URL}${item.product_image}`
                                    : "/images/no-image.png"
                            }

                            alt={item.product_name}

                        />

                        <div className="item-info">

                            <h4>{item.product_name}</h4>

                            <p>

                                Quantity :
                                {" "}
                                {item.quantity}

                            </p>

                            <p>

                                Price :
                                {" "}
                                {formatPrice(item.price)}

                            </p>

                            <p>

                                Subtotal :
                                {" "}
                                {formatPrice(item.subtotal)}

                            </p>

                        </div>

                    </div>

                ))}

            </div>

            <div className="order-summary">

                <div className="summary-card">

                    <h5>Subtotal</h5>

                    <p>{formatPrice(order.subtotal)}</p>

                </div>

                <div className="summary-card">

                    <h5>Shipping</h5>

                    <p>{formatPrice(order.shipping)}</p>

                </div>

                <div className="summary-card">

                    <h5>Tax</h5>

                    <p>{formatPrice(order.tax)}</p>

                </div>

                <div className="summary-card">

                    <h5>Discount</h5>

                    <p>{formatPrice(order.discount)}</p>

                </div>

            </div>

            <div className="total-box">

                <h3>Total Amount</h3>

                <span>

                    {formatPrice(order.total)}

                </span>

            </div>

            <div className="order-summary">

                <div className="summary-card">

                    <h5>Shipping Address</h5>

                    <p>

                        {order.shipping_address?.first_name}
                        {" "}
                        {order.shipping_address?.last_name}

                    </p>

                    <p>

                        {order.shipping_address?.address}

                    </p>

                    <p>

                        {order.shipping_address?.city},
                        {" "}
                        {order.shipping_address?.state}

                    </p>

                    <p>

                        {order.shipping_address?.postal_code}

                    </p>

                    <p>

                        {order.shipping_address?.country}

                    </p>

                    <p>

                        {order.shipping_address?.phone}

                    </p>

                    <p>

                        {order.shipping_address?.email}

                    </p>

                </div>

                <div className="summary-card">

                    <h5>Order Information</h5>

                    <p>

                        <strong>Created</strong>

                    </p>

                    <p>

                        {formatDate(order.created_at)}

                    </p>

                    <br />

                    <p>

                        <strong>Last Updated</strong>

                    </p>

                    <p>

                        {formatDate(order.updated_at)}

                    </p>

                </div>

            </div>

        </div>

    );

}

export default OrderTracking;