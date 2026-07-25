import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

import { useCart } from "../../contexts/CartContext";

import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

import "./Cart.css";

function Cart() {

    const {
        cartItems,
        clearCart,
        loading,
    } = useCart();

    // Loading State
    if (loading) {

        return (

            <section className="cart-page">

                <div className="container">

                    <div className="text-center py-5">

                        <h3>Loading Cart...</h3>

                    </div>

                </div>

            </section>

        );

    }

    // Empty Cart
    if (cartItems.length === 0) {

        return (

            <section className="cart-page">

                <div className="container">

                    <div className="empty-cart">

                        <FiShoppingBag size={80} />

                        <h2>Your Cart is Empty</h2>

                        <p>
                            Looks like you haven't added anything yet.
                        </p>

                        <Link
                            to="/shop"
                            className="continue-shopping"
                        >
                            Continue Shopping
                        </Link>

                    </div>

                </div>

            </section>

        );

    }

    return (

        <section className="cart-page">

            <div className="container">

                <div className="cart-header">

                    <h1>
                        Shopping Cart
                    </h1>

                    <button
                        className="clear-cart-btn"
                        onClick={clearCart}
                    >
                        Clear Cart
                    </button>

                </div>

                <div className="cart-layout">

                    <div className="cart-left">

                        {cartItems.map((item) => (

                            <CartItem
                                key={item.id}
                                item={item}
                            />

                        ))}

                    </div>

                    <div className="cart-right">

                        <OrderSummary />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Cart;