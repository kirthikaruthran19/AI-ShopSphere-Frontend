import { FiMessageCircle, FiX } from "react-icons/fi";

import { useChatbotContext } from "../context/ChatbotContext";

import ChatWindow from "../ChatWindow/ChatWindow";

import "./ChatWidget.css";

function ChatWidget() {

    const {

        isOpen,

        toggleChat,

    } = useChatbotContext();

    return (

        <>

            <button

                className="chat-widget-button"

                onClick={toggleChat}

                aria-label="Toggle Chatbot"

            >

                {isOpen ? <FiX /> : <FiMessageCircle />}

            </button>

            <ChatWindow />

        </>

    );

}

export default ChatWidget;