import OrderCard from "../OrderCard/OrderCard";
import "./ChatOrderMessage.css";

function ChatOrderMessage({ orders }) {

    if (!orders || orders.length === 0) {
        return (
            <div className="chat-order-empty">
                You haven't placed any orders yet.
            </div>
        );
    }

    return (
        <div className="chat-order-message">

            <div className="chat-order-header">

                <h6>My Orders</h6>

                <span>
                    {orders.length} Order{orders.length > 1 ? "s" : ""}
                </span>

            </div>

            <div className="chat-order-items">

                {orders.map((order) => (

                    <OrderCard
                        key={order.id}
                        order={order}
                    />

                ))}

            </div>

        </div>
    );

}

export default ChatOrderMessage;