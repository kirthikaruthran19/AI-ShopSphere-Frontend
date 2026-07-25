import {
    FiShoppingBag,
    FiSearch,
    FiColumns,
    FiStar,
    FiShoppingCart,
    FiHeart,
    FiPackage,
    FiUser,
    FiTag,
    FiHelpCircle,
} from "react-icons/fi";

import { useChatbotContext } from "../context/ChatbotContext";

import "./QuickActions.css";

const actions = [
    {
        id: "browse",
        title: "Browse Products",
        message: "Browse Products",
        icon: <FiShoppingBag />,
    },
    {
        id: "search",
        title: "Search Products",
        message: "Search Products",
        icon: <FiSearch />,
    },
    {
        id: "compare",
        title: "Compare Products",
        message: "Compare Products",
        icon: <FiColumns />,
    },
    {
        id: "recommend",
        title: "AI Recommendations",
        message: "Recommend products",
        icon: <FiStar />,
    },
    {
        id: "cart",
        title: "My Cart",
        message: "My Cart",
        icon: <FiShoppingCart />,
    },
    {
        id: "wishlist",
        title: "Wishlist",
        message: "My Wishlist",
        icon: <FiHeart />,
    },
    {
        id: "orders",
        title: "My Orders",
        message: "My Orders",
        icon: <FiPackage />,
    },
    {
        id: "profile",
        title: "Profile",
        message: "My Profile",
        icon: <FiUser />,
    },
    {
        id: "deals",
        title: "Today's Deals",
        message: "Today's Deals",
        icon: <FiTag />,
    },
    {
        id: "help",
        title: "Help Center",
        message: "Help",
        icon: <FiHelpCircle />,
    },
];

function QuickActions() {

    const { sendMessage } = useChatbotContext();

    return (

        <section className="ai-chat-quick-actions">

            {actions.map((action) => (

                <button
                    key={action.id}
                    type="button"
                    className="ai-chat-action-card"
                    onClick={() => sendMessage(action.message)}
                >

                    <span className="ai-chat-action-icon">
                        {action.icon}
                    </span>

                    <span className="ai-chat-action-title">
                        {action.title}
                    </span>

                </button>

            ))}

        </section>

    );

}

export default QuickActions;