import WishlistCard from "../WishlistCard/WishlistCard";
import "./ChatWishlistMessage.css";

function ChatWishlistMessage({ wishlist }) {

    if (!wishlist || wishlist.length === 0) {
        return (
            <div className="chat-wishlist-empty">
                Your wishlist is empty.
            </div>
        );
    }

    return (
        <div className="chat-wishlist-message">

            <div className="chat-wishlist-header">

                <h6>My Wishlist</h6>

                <span>
                    {wishlist.length} Item{wishlist.length > 1 ? "s" : ""}
                </span>

            </div>

            <div className="chat-wishlist-items">

                {wishlist.map((item) => (

                    <WishlistCard
                        key={item.id}
                        product={item.product}
                    />

                ))}

            </div>

        </div>
    );

}

export default ChatWishlistMessage;