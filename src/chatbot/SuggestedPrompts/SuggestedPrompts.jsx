import {
    FiSearch,
    FiHeart,
    FiPackage,
    FiShoppingCart,
    FiUser,
} from "react-icons/fi";

import { useChatbotContext } from "../context/ChatbotContext";

import "./SuggestedPrompts.css";

const prompts = [
    {
        id: 1,
        text: "Show laptops",
        icon: <FiSearch />,
    },
    {
        id: 2,
        text: "My Cart",
        icon: <FiShoppingCart />,
    },
    {
        id: 3,
        text: "My Wishlist",
        icon: <FiHeart />,
    },
    {
        id: 4,
        text: "Track My Order",
        icon: <FiPackage />,
    },
    {
        id: 5,
        text: "My Profile",
        icon: <FiUser />,
    },
];

function SuggestedPrompts() {

    const { sendMessage } = useChatbotContext();

    const handleClick = (text) => {

        sendMessage(text);

    };

    return (

        <section className="ai-chat-prompts">

            <h4 className="ai-chat-prompts-title">

                Suggested Questions

            </h4>

            <div className="ai-chat-prompts-list">

                {prompts.map((prompt) => (

                    <button
                        key={prompt.id}
                        type="button"
                        className="ai-chat-prompt-chip"
                        onClick={() => handleClick(prompt.text)}
                    >

                        <span className="ai-chat-prompt-icon">

                            {prompt.icon}

                        </span>

                        <span>

                            {prompt.text}

                        </span>

                    </button>

                ))}

            </div>

        </section>

    );

}

export default SuggestedPrompts;