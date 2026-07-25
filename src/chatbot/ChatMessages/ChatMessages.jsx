import "./ChatMessages.css";

import MessageRenderer from "../MessageRenderer/MessageRenderer";
import TypingIndicator from "../TypingIndicator/TypingIndicator";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";

import useAutoScroll from "../hooks/useAutoScroll";

function ChatMessages({

    messages = [],

    typing = false,

}) {

    const bottomRef = useAutoScroll(messages, typing);

    return (

        <div className="chat-messages">

            {messages.length === 0 ? (

                <WelcomeScreen />

            ) : (

                <>
                    {messages.map((message) => (

                        <MessageRenderer

                            key={message.id}

                            message={message}

                        />

                    ))}

                    {typing && <TypingIndicator />}

                </>

            )}

            <div ref={bottomRef}></div>

        </div>

    );

}

export default ChatMessages;