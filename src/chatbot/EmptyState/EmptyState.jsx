import "./EmptyState.css";
import {
    FiInbox,
    FiShoppingCart,
    FiHeart,
    FiPackage,
    FiSearch,
} from "react-icons/fi";

const iconMap = {
    default: <FiInbox />,
    cart: <FiShoppingCart />,
    wishlist: <FiHeart />,
    orders: <FiPackage />,
    search: <FiSearch />,
};

function EmptyState({
    type = "default",
    title = "Nothing Here",
    message = "There's nothing to display right now.",
    buttonText,
    onAction,
}) {
    return (
        <div className="empty-state">

            <div className="empty-icon">
                {iconMap[type] || iconMap.default}
            </div>

            <h4 className="empty-title">
                {title}
            </h4>

            <p className="empty-message">
                {message}
            </p>

            {buttonText && (
                <button
                    className="empty-button"
                    onClick={onAction}
                >
                    {buttonText}
                </button>
            )}

        </div>
    );
}

export default EmptyState;