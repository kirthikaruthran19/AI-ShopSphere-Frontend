import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useOrder } from "../../contexts/OrderContext";

import "./OrderDetails.css";

function OrderDetails() {

    const { id } = useParams();

    const {
        currentOrder,
        loading,
        loadOrder,
    } = useOrder();

    useEffect(() => {

        loadOrder(id);

    }, [id]);

    if (loading) {

        return (

            <div className="container py-5">

                <h3>Loading Order...</h3>

            </div>

        );

    }

    if (!currentOrder) {

        return (

            <div className="container py-5">

                <h3>Order Not Found</h3>

            </div>

        );

    }

    return (

        <section className="order-details-page">

            <div className="container">

                <div className="order-header">

                    <h2>

                        Order #{currentOrder.order_number}

                    </h2>

                    <span className="status">

                        {currentOrder.status}

                    </span>

                </div>

                <div className="shipping-card">

                    <h4>

                        Shipping Address

                    </h4>

                    <p>

                        {currentOrder.shipping_address.first_name}{" "}
                        {currentOrder.shipping_address.last_name}

                    </p>

                    <p>

                        {currentOrder.shipping_address.address}

                    </p>

                    <p>

                        {currentOrder.shipping_address.city},{" "}
                        {currentOrder.shipping_address.state}

                    </p>

                    <p>

                        {currentOrder.shipping_address.postal_code}

                    </p>

                    <p>

                        {currentOrder.shipping_address.country}

                    </p>

                    <p>

                        {currentOrder.shipping_address.phone}

                    </p>

                </div>

                <div className="products-card">

                    <h4>

                        Products

                    </h4>

                    {currentOrder.items.map((item) => (

                        <div
                            key={item.id}
                            className="product-row"
                        >

                            <img
                                src={item.product_image}
                                alt={item.product_name}
                            />

                            <div>

                                <h5>

                                    {item.product_name}

                                </h5>

                                <p>

                                    Qty : {item.quantity}

                                </p>

                            </div>

                            <strong>

                                ₹{Number(item.subtotal).toLocaleString()}

                            </strong>

                        </div>

                    ))}

                </div>

                <div className="summary-card">

                    <div>

                        <span>Subtotal</span>

                        <strong>

                            ₹{Number(currentOrder.subtotal).toLocaleString()}

                        </strong>

                    </div>

                    <div>

                        <span>Shipping</span>

                        <strong>

                            ₹{Number(currentOrder.shipping).toLocaleString()}

                        </strong>

                    </div>

                    <div>

                        <span>Tax</span>

                        <strong>

                            ₹{Number(currentOrder.tax).toLocaleString()}

                        </strong>

                    </div>

                    <div>

                        <span>Discount</span>

                        <strong>

                            ₹{Number(currentOrder.discount).toLocaleString()}

                        </strong>

                    </div>

                    <hr />

                    <div className="grand-total">

                        <span>Total</span>

                        <strong>

                            ₹{Number(currentOrder.total).toLocaleString()}

                        </strong>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default OrderDetails;