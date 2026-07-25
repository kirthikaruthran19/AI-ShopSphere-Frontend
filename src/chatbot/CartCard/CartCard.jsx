import "./CartCard.css";

function CartCard({

    image,

    name,

    price,

    quantity,

}) {

    const total = Number(price) * quantity;

    return (

        <div className="chat-cart-card">

            <div className="chat-cart-top">

                <img
                    src={image}
                    alt={name}
                    className="chat-cart-image"
                />

                <div className="chat-cart-details">

                    <h6>{name}</h6>

                    <p>

                        ₹{Number(price).toLocaleString()}

                    </p>

                    <span>

                        Qty : {quantity}

                    </span>

                    <strong>

                        Total : ₹{total.toLocaleString()}

                    </strong>

                </div>

            </div>

        </div>

    );

}

export default CartCard;