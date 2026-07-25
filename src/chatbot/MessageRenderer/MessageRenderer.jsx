import MessageBubble from "../MessageBubble/MessageBubble";
import ProductMessage from "../ProductMessage/ProductMessage";
import ComparisonCard from "../ComparisonCard/ComparisonCard";
import ChatCartMessage from "../ChatCartMessage/ChatCartMessage";
import ChatWishlistMessage from "../ChatWishlistMessage/ChatWishlistMessage";
import ChatOrderMessage from "../ChatOrderMessage/ChatOrderMessage";
import OrderSummaryCard from "../OrderSummaryCard/OrderSummaryCard";
import ProfileCard from "../ProfileCard/ProfileCard";
import DealCard from "../DealCard/DealCard";
import NotificationCard from "../NotificationCard/NotificationCard";
import LoadingState from "../LoadingState/LoadingState";
import ErrorCard from "../ErrorCard/ErrorCard";
import EmptyState from "../EmptyState/EmptyState";
import TrackingCard from "../TrackingCard/TrackingCard";
import CouponCard from "../CouponCard/CouponCard";
import ReviewCard from "../ReviewCard/ReviewCard";
function MessageRenderer({ message }) {

    switch (message.type) {

        // ==========================
        // Text
        // ==========================

        case "text":

        case "navigation":

            return (
                <MessageBubble
                    message={message}
                />
            );

        // ==========================
        // Products
        // ==========================

        case "product":

        case "products":

        case "recommendation":

            return (
                <ProductMessage
                    message={message}
                    products={message.data || message.products || []}
                />
            );

        // ==========================
        // Comparison
        // ==========================

        case "comparison":

            return (
                <ComparisonCard
                    products={message.data}
                />
            );

        // ==========================
        // Cart
        // ==========================

        case "cart":

            return (
                <ChatCartMessage
                    cart={message.data}
                />
            );

        // ==========================
        // Wishlist
        // ==========================

        case "wishlist":

            return (
                <ChatWishlistMessage
                    wishlist={message.data}
                />
            );

        // ==========================
        // Orders
        // ==========================

        case "order":

        case "orders":

            return (
                <ChatOrderMessage
                    orders={message.data}
                />
            );

        // ==========================
        // Order Summary
        // ==========================

        case "summary":

            return (
                <OrderSummaryCard
                    {...message.data}
                />
            );

        // ==========================
        // Profile
        // ==========================

        case "profile":

            return (
                <ProfileCard
                    profile={message.data}
                />
            );


        // ==========================
        // payment
        // ==========================
        case "payment":

            return (
                <MessageBubble
                    message={message}
                />
            );
        // ==========================
        // Deals
        // ==========================

        case "deal":

            return (
                <DealCard
                    deal={message.data}
                />
            );

        // ==========================
        // Notifications
        // ==========================

        case "notification":

            return (
                <>
                    {message.data.map((item, index) => (
                        <NotificationCard
                            key={index}
                            notification={item}
                        />
                    ))}
                </>
            );

        // ==========================
        // Coupon
        // ==========================
        case "coupon":

            return (
                <>
                    {message.data.map((coupon, index) => (
                        <CouponCard
                            key={index}
                            coupon={coupon}
                        />
                    ))}
                </>
            );
        // ==========================
        // Review
        // ==========================

        case "reviews":

            return (
                <ReviewCard
                    reviewData={message.data}
                />
            );
        // ==========================
        // Tracking
        // ==========================
        case "tracking":

            return (
                <TrackingCard
                    tracking={message.data}
                />
            );

        // ==========================
        // Loading
        // ==========================

        case "loading":

            return (
                <LoadingState
                    text={message.text}
                />
            );

        // ==========================
        // Empty
        // ==========================

        case "empty":

            return (
                <EmptyState
                    {...message.data}
                />
            );

        // ==========================
        // Error
        // ==========================

        case "error":

            return (
                <ErrorCard
                    title={message.title}
                    message={message.text}
                    onRetry={message.onRetry}
                />
            );

        // ==========================
        // Default
        // ==========================

        default:

            return (
                <MessageBubble
                    message={{
                        ...message,
                        text:
                            message.text ||
                            "I'm sorry, I couldn't process that request.",
                    }}
                />
            );

    }

}

export default MessageRenderer;