import "./OrderCard.css";
import {
    FiTruck,
    FiEye,
} from "react-icons/fi";

function OrderCard({
    order,
    onTrack,
    onView,
}) {

    if (!order) return null;

    const firstItem = order.items?.[0];

    const image = firstItem?.product_image
        ? `http://127.0.0.1:8000${firstItem.product_image}`
        : "/images/placeholder.png";

    const productName =
        firstItem?.product_name || "Order";

    return (
        <div className="order-card">

            <div className="order-top">

                <img
                    src={image}
                    alt={productName}
                    className="order-image"
                />

                <div className="order-info">

                    <h6 className="order-title">
                        {productName}
                    </h6>

                    <p className="order-id">
                        Order ID : {order.order_number}
                    </p>

                    <span
                        className={`order-status ${String(order.status).toLowerCase()}`}
                    >
                        {order.status}
                    </span>

                </div>

            </div>

            <div className="order-details">

                <div className="order-row">
                    <span>Total</span>
                    <strong>
                        ₹{Number(order.total).toLocaleString()}
                    </strong>
                </div>

                <div className="order-row">
                    <span>Items</span>
                    <strong>
                        {order.total_items}
                    </strong>
                </div>

                <div className="order-row">
                    <span>Placed On</span>
                    <strong>
                        {order.created_at?.split("T")[0]}
                    </strong>
                </div>

            </div>

            <div className="order-actions">

                <button
                    className="track-btn"
                    onClick={onTrack}
                >
                    <FiTruck />
                    Track Order
                </button>

                <button
                    className="details-btn"
                    onClick={onView}
                >
                    <FiEye />
                    Details
                </button>

            </div>

        </div>
    );

}

export default OrderCard;