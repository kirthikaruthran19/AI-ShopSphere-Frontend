import { createContext, useContext, useEffect, useState } from "react";

import {
    getCart,
    addToCart as addCartItem,
    updateCartItem,
    removeCartItem,
    clearCart as clearCartApi,
} from "../services/cartService";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [coupon, setCoupon] = useState(null);

    // ==========================
    // Load Cart
    // ==========================

    const loadCart = async () => {

        try {

            setLoading(true);

            const response = await getCart();

            const items =
                response?.items ||
                response?.results ||
                response ||
                [];

            setCartItems(Array.isArray(items) ? items : []);

        } catch (error) {

            console.error("Failed to load cart:", error);
            setCartItems([]);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadCart();

    }, []);

    // ==========================
    // Add To Cart
    // ==========================

    const addToCart = async (productId, quantity = 1) => {

        try {

            await addCartItem(productId, quantity);

            await loadCart();

        } catch (error) {

            console.error("Add Cart Error:", error);

        }

    };

    // ==========================
    // Increase Quantity
    // ==========================

    const increaseQuantity = async (cartItemId, quantity) => {

        try {

            await updateCartItem(
                cartItemId,
                quantity + 1
            );

            await loadCart();

        } catch (error) {

            console.error(error);

        }

    };

    // ==========================
    // Decrease Quantity
    // ==========================

    const decreaseQuantity = async (cartItemId, quantity) => {

        if (quantity <= 1) {

            await removeItem(cartItemId);
            return;

        }

        try {

            await updateCartItem(
                cartItemId,
                quantity - 1
            );

            await loadCart();

        } catch (error) {

            console.error(error);

        }

    };

    // ==========================
    // Remove Item
    // ==========================

    const removeItem = async (cartItemId) => {

        try {

            await removeCartItem(cartItemId);

            await loadCart();

        } catch (error) {

            console.error(error);

        }

    };

    // ==========================
    // Clear Cart
    // ==========================

    const clearCart = async () => {

        try {

            await clearCartApi();

            setCartItems([]);
            setCoupon(null);

        } catch (error) {

            console.error(error);

        }

    };

    // ==========================
    // Coupon
    // ==========================

    const applyCoupon = (code) => {

        const couponCode = code.trim().toUpperCase();

        if (couponCode === "SAVE10") {

            setCoupon("SAVE10");

            return {
                success: true,
                message: "Coupon Applied Successfully",
            };

        }

        if (couponCode === "WELCOME20") {

            setCoupon("WELCOME20");

            return {
                success: true,
                message: "Coupon Applied Successfully",
            };

        }

        return {
            success: false,
            message: "Invalid Coupon",
        };

    };

    // ==========================
    // Calculations
    // ==========================

    const subtotal = cartItems.reduce(

        (total, item) =>
            total + Number(item.subtotal || 0),

        0

    );

    const totalItems = cartItems.reduce(

        (total, item) =>
            total + Number(item.quantity || 0),

        0

    );

    const shipping = subtotal >= 500 ? 0 : 25;

    const tax = subtotal * 0.05;

    const discount = (() => {

        switch (coupon) {

            case "SAVE10":
                return subtotal * 0.10;

            case "WELCOME20":
                return subtotal * 0.20;

            default:
                return 0;

        }

    })();

    const grandTotal =
        subtotal +
        shipping +
        tax -
        discount;

    return (

        <CartContext.Provider
            value={{
                loading,
                cartItems,
                loadCart,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeItem,
                clearCart,
                subtotal,
                shipping,
                tax,
                discount,
                grandTotal,
                totalItems,
                coupon,
                applyCoupon,
            }}
        >

            {children}

        </CartContext.Provider>

    );

}