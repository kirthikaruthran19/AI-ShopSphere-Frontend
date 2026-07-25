import api from "./api";

// ==============================
// Get User Wishlist
// ==============================
export const getWishlist = async () => {
    const response = await api.get("/wishlist/");
    return response.data;
};

// ==============================
// Add Product to Wishlist
// ==============================
export const addToWishlist = async (productId) => {
    const response = await api.post("/wishlist/add/", {
        product_id: productId,
    });

    return response.data;
};

// ==============================
// Remove Product from Wishlist
// ==============================
export const removeFromWishlist = async (productId) => {
    const response = await api.delete(`/wishlist/remove/${productId}/`);
    return response.data;
};

// ==============================
// Clear Wishlist (Optional)
// ==============================
export const clearWishlist = async () => {
    const response = await api.delete("/wishlist/clear/");
    return response.data;
};