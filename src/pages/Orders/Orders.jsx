import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useOrder } from "../../contexts/OrderContext";

import "./Orders.css";

function Orders() {

    const {
        orders,
        loading,
        loadOrders,
    } = useOrder();

    useEffect(() => {

        loadOrders();

    }, []);

    const formatDate = (date) => {

        return new Date(date).toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
        });

    };

    const getStatusClass = (status = "") => {

        return status
            .toLowerCase()
            .replace(/\s+/g, "-");

    };

    const getPaymentClass = (status = "") => {

        return status
            .toLowerCase()
            .replace(/\s+/g, "-");

    };

    if (loading) {

        return (

            <div className="orders-loading">

                <h3>Loading Orders...</h3>

            </div>

        );

    }

    return (

        <section className="orders-page">

            <div className="container">

                <h1 className="orders-title">

                    My Orders

                </h1>

                {orders.length === 0 ? (

                    <div className="empty-orders">

                        <h3>No Orders Found</h3>

                        <p>

                            You haven't placed any orders yet.

                        </p>

                    </div>

                ) : (

                    orders.map((order) => (

                        <div

                            className="order-card"

                            key={order.id}

                        >

                            <div className="order-header">

                                <div>

                                    <h3>

                                        {order.order_number}

                                    </h3>

                                    <p>

                                        Ordered on

                                        {" "}

                                        {formatDate(order.created_at)}

                                    </p>

                                </div>

                                <div className="order-price">

                                    ₹

                                    {Number(order.total).toLocaleString("en-IN")}

                                </div>

                            </div>

                            <div className="order-body">

                                <div className="order-info">

                                    <div className="info-box">

                                        <span>

                                            Status

                                        </span>

                                        <div
    className={`status-badge status-${getStatusClass(order.status)}`}
>
    Status: {order.status}
</div>

                                    </div>

                                    <div className="info-box">

                                        <span>

                                            Payment

                                        </span>

                                        <div

                                            className={`payment-badge payment-${getPaymentClass(order.payment_status)}`}

                                        >

                                            {order.payment_status}

                                        </div>

                                    </div>

                                    <div className="info-box">

                                        <span>

                                            Items

                                        </span>

                                        <strong>

                                            {order.total_items}

                                        </strong>

                                    </div>

                                </div>

                                <div className="order-actions">

                                    <Link

                                        to={`/orders/${order.id}`}

                                        className="details-btn"

                                    >

                                        View Details

                                    </Link>

                                    <Link

                                        to={`/orders/${order.id}/tracking`}

                                        className="track-btn"

                                    >

                                        Track Order

                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))

                )}

            </div>

        </section>

    );

}

export default Orders;