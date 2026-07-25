import { FiCpu, FiUser } from "react-icons/fi";

import "./ChatAvatar.css";

function ChatAvatar({ sender }) {

    const isUser = sender === "user";

    return (

        <div
            className={
                isUser
                    ? "ai-chat-avatar ai-chat-avatar-user"
                    : "ai-chat-avatar ai-chat-avatar-bot"
            }
        >

            {isUser ? <FiUser /> : <FiCpu />}

        </div>

    );

}

export default ChatAvatar;