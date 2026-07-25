import {
    FiCpu,
    FiMinus,
    FiTrash2,
    FiX,
} from "react-icons/fi";

import { useChatbotContext } from "../context/ChatbotContext";

import "./ChatHeader.css";

function ChatHeader() {

    const {
        closeChat,
        clearChat,
    } = useChatbotContext();

    return (

        <header className="ai-chat-header">

            <div className="ai-chat-header-left">

                <div className="ai-chat-avatar">

                    <FiCpu />

                </div>

                <div className="ai-chat-header-info">

                    <h5>

                        AI ShopSphere Assistant

                    </h5>

                    <span className="ai-chat-status">

                        <span className="ai-chat-status-dot"></span>

                        Online

                    </span>

                </div>

            </div>

            <div className="ai-chat-header-actions">

                <button
                    type="button"
                    className="ai-chat-header-btn"
                    onClick={clearChat}
                    aria-label="Clear Chat"
                    title="Clear Chat"
                >

                    <FiTrash2 />

                </button>

                <button
                    type="button"
                    className="ai-chat-header-btn"
                    aria-label="Minimize Chat"
                    title="Minimize"
                >

                    <FiMinus />

                </button>

                <button
                    type="button"
                    className="ai-chat-header-btn"
                    onClick={closeChat}
                    aria-label="Close Chat"
                    title="Close"
                >

                    <FiX />

                </button>

            </div>

        </header>

    );

}

export default ChatHeader;