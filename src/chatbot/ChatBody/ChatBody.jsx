import "./ChatBody.css";

import ChatMessages from "../ChatMessages/ChatMessages";

import { useChatbotContext } from "../context/ChatbotContext";

function ChatBody() {

    const {
        messages,
        typing,
    } = useChatbotContext();

    return (

        <div className="chat-body">

            <ChatMessages
                messages={messages}
                typing={typing}
            />

        </div>

    );

}

export default ChatBody;