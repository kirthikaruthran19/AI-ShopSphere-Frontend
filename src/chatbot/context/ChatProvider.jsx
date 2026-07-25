import { useState, useCallback } from "react";
import ChatContext from "./ChatContext";

function ChatProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(false);

    const [typing, setTyping] = useState(false);

    const [error, setError] = useState(null);

    const toggleChat = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const openChat = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeChat = useCallback(() => {
        setIsOpen(false);
    }, []);

    const clearChat = useCallback(() => {
        setMessages([]);
        setError(null);
    }, []);

    const addMessage = useCallback((message) => {

        setMessages(prev => [
            ...prev,
            {
                id: Date.now() + Math.random(),
                timestamp: new Date(),
                ...message,
            },
        ]);

    }, []);

    const removeMessage = useCallback((id) => {

        setMessages(prev =>
            prev.filter(message => message.id !== id)
        );

    }, []);

    const updateMessage = useCallback((id, updates) => {

        setMessages(prev =>
            prev.map(message =>
                message.id === id
                    ? { ...message, ...updates }
                    : message
            )
        );

    }, []);

    const value = {

        isOpen,

        messages,

        loading,

        typing,

        error,

        setLoading,

        setTyping,

        setError,

        toggleChat,

        openChat,

        closeChat,

        clearChat,

        addMessage,

        removeMessage,

        updateMessage,

    };

    return (

        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>

    );
}

export default ChatProvider;