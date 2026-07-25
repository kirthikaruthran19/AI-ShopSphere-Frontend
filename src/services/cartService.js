import api from "./api";

// ==============================
// Get User Cart
// ==============================
export const getCart = async () => {
    const response = await api.get("cart/");
    return response.data;
};

// ==============================
// Add Product To Cart
// ==============================
export const addToCart = async (productId, quantity = 1) => {
    const response = await api.post("cart/add/", {
        product_id: productId,
        quantity,
    });

    return response.data;
};

// ==============================
// Update Cart Item Quantity
// ==============================
export const updateCartItem = async (cartItemId, quantity) => {
    const response = await api.patch(
        `cart/update/${cartItemId}/`,
        {
            quantity,
        }
    );

    return response.data;
};

// ==============================
// Remove Cart Item
// ==============================
export const removeCartItem = async (cartItemId) => {
    const response = await api.delete(
        `cart/remove/${cartItemId}/`
    );

    return response.data;
};

// ==============================
// Clear Cart
// ==============================
export const clearCart = async () => {
    const response = await api.delete("cart/clear/");
    return response.data;
};