import { useState, useRef } from "react";
import { FiSend } from "react-icons/fi";

import { useChatbotContext } from "../context/ChatbotContext";

import "./ChatInput.css";

const MAX_MESSAGE_LENGTH = 1000;

function ChatInput() {

    const [message, setMessage] = useState("");

    const textareaRef = useRef(null);

    const {
        sendMessage,
        loading,
        typing,
    } = useChatbotContext();

    const autoResize = () => {

        const textarea = textareaRef.current;

        if (!textarea) return;

        textarea.style.height = "auto";
        textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;

    };

    const handleChange = (event) => {

        const value = event.target.value;

        if (value.length > MAX_MESSAGE_LENGTH) return;

        setMessage(value);

        autoResize();

    };

    const handleSend = async () => {

        const text = message.trim();

        if (!text) return;

        await sendMessage(text);

        setMessage("");

        if (textareaRef.current) {

            textareaRef.current.style.height = "48px";

        }

    };

    const handleKeyDown = (event) => {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            handleSend();

        }

    };

    return (

        <div className="chat-input-wrapper">

            <div className="chat-input-container">

                <textarea

                    ref={textareaRef}

                    className="chat-textarea"

                    rows={1}

                    value={message}

                    placeholder="Ask me anything about AI-ShopSphere..."

                    onChange={handleChange}

                    onKeyDown={handleKeyDown}

                    disabled={loading || typing}

                    aria-label="Chat Message"

                />

                <button

                    className="send-button"

                    onClick={handleSend}

                    disabled={
                        !message.trim() ||
                        loading ||
                        typing
                    }

                    aria-label="Send Message"

                >

                    <FiSend />

                </button>

            </div>

            <div className="character-count">

                {message.length}/{MAX_MESSAGE_LENGTH}

            </div>

        </div>

    );

}

export default ChatInput;