import { AnimatePresence, motion } from "framer-motion";

import ChatHeader from "../ChatHeader/ChatHeader";
import ChatBody from "../ChatBody/ChatBody";
import ChatInput from "../ChatInput/ChatInput";

import { useChatbotContext } from "../context/ChatbotContext";

import "./ChatWindow.css";

function ChatWindow() {

    const { isOpen } = useChatbotContext();

    return (
        <AnimatePresence>

            {isOpen && (

                <motion.div
                    className="chat-window"
                    initial={{
                        opacity: 0,
                        scale: 0.95,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.95,
                        y: 20,
                    }}
                    transition={{
                        duration: 0.25,
                    }}
                    role="dialog"
                    aria-label="AI ShopSphere Assistant"
                >

                    <ChatHeader />

                    <ChatBody />

                    <ChatInput />

                </motion.div>

            )}

        </AnimatePresence>
    );
}

export default ChatWindow;