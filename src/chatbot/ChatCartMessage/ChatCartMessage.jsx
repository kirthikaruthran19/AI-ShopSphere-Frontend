import CartCard from "../CartCard/CartCard";
import "./ChatCartMessage.css";

function ChatCartMessage({ cart }) {

    if (!cart || !cart.items || cart.items.length === 0) {
        return (
            <div className="chat-cart-empty">
                Your cart is empty.
            </div>
        );
    }

    return (
        <div className="chat-cart-message">

            <div className="chat-cart-header">

                <h6>
                    Shopping Cart
                </h6>

                <span>
                    {cart.total_items} Item{cart.total_items > 1 ? "s" : ""}
                </span>

            </div>

            <div className="chat-cart-items">

                {cart.items.map((item) => (

                    <CartCard
                        key={item.id}
                        image={`http://127.0.0.1:8000${item.product_image}`}
                        name={item.product_name}
                        price={Number(item.price)}
                        quantity={item.quantity}
                    />

                ))}

            </div>

            <div className="chat-cart-summary">

                <strong>
                    Total :
                </strong>

                <span>
                    ₹{Number(cart.subtotal).toLocaleString()}
                </span>

            </div>

        </div>
    );

}

export default ChatCartMessage;