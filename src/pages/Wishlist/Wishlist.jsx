import { motion } from "framer-motion";

import { useWishlist } from "../../contexts/WishlistContext";

import WishlistHeader from "../../components/Wishlist/WishlistHeader/WishlistHeader";
import WishlistSummary from "../../components/Wishlist/WishlistSummary/WishlistSummary";
import WishlistGrid from "../../components/Wishlist/WishlistGrid/WishlistGrid";
import EmptyWishlist from "../../components/Wishlist/EmptyWishlist/EmptyWishlist";
import WishlistSkeleton from "../../components/Wishlist/WishlistSkeleton/WishlistSkeleton";

import "./Wishlist.css";

function Wishlist() {
    const {
        wishlist,
        loading,
    } = useWishlist();

    if (loading) {
        return <WishlistSkeleton />;
    }

    return (
        <motion.main
            className="ws-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div className="ws-container">

                <WishlistHeader />

                {
                    wishlist.length > 0 ? (
                        <>
                            <WishlistSummary />

                            <WishlistGrid
                                items={wishlist}
                            />
                        </>
                    ) : (
                        <EmptyWishlist />
                    )
                }

            </div>
        </motion.main>
    );
}

export default Wishlist;