import "./MessageBubble.css";

import ChatAvatar from "../ChatAvatar/ChatAvatar";
import formatTime from "../utils/formatTime";

function MessageBubble({ message }) {

    const isUser = message.sender === "user";

    return (

        <div
            className={`message-row ${
                isUser ? "user-message" : "bot-message"
            }`}
        >

            {!isUser && (
                <ChatAvatar sender="bot" />
            )}

            <div className="message-content">

                <div
                    className={`message-bubble ${
                        isUser ? "user-bubble" : "bot-bubble"
                    }`}
                >

                    <p className="message-text">
                        {message.text}
                    </p>

                </div>

                <div className="message-footer">

                    <span className="message-time">
                        {formatTime(message.timestamp)}
                    </span>

                </div>

            </div>

            {isUser && (
                <ChatAvatar sender="user" />
            )}

        </div>

    );

}

export default MessageBubble;