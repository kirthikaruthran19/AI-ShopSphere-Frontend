import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import {
    getWishlist,
    addToWishlist,
    removeFromWishlist,
} from "../services/wishlistService";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {

    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // ==========================
    // Load Wishlist
    // ==========================

    const fetchWishlist = async () => {

        try {

            setLoading(true);

            const response = await getWishlist();

            const items =
                response?.data ||
                response?.results ||
                response ||
                [];

            setWishlist(Array.isArray(items) ? items : []);
            setError(null);

        } catch (err) {

            console.error("Wishlist Error:", err);

            setWishlist([]);
            setError("Failed to load wishlist.");

        } finally {

            setLoading(false);

        }

    };

    // ==========================
    // Add Product
    // ==========================

    const addItem = async (productId) => {

        try {

            await addToWishlist(productId);

            await fetchWishlist();

        } catch (err) {

            console.error(err);

        }

    };

    // ==========================
    // Remove Product
    // ==========================

    const removeItem = async (productId) => {

        try {

            await removeFromWishlist(productId);

            await fetchWishlist();

        } catch (err) {

            console.error(err);

        }

    };

    // ==========================
    // Check Wishlist
    // ==========================

    const isWishlisted = (productId) => {

        return wishlist.some(
            (item) => item.product?.id === productId
        );

    };

    useEffect(() => {

        fetchWishlist();

    }, []);

    return (

        <WishlistContext.Provider
            value={{
                wishlist,
                loading,
                error,
                fetchWishlist,
                addItem,
                removeItem,
                isWishlisted,
                wishlistCount: wishlist.length,
            }}
        >

            {children}

        </WishlistContext.Provider>

    );

}

export function useWishlist() {

    return useContext(WishlistContext);

}