import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import chatbotService from "../services/chatbotService";

import {
    saveChatHistory,
    loadChatHistory,
    clearChatHistory,
} from "../utils/chatStorage";

function useChatbot() {

    // ==========================
    // Navigation
    // ==========================

    const navigate = useNavigate();

    // ==========================
    // States
    // ==========================

    const [messages, setMessages] = useState(loadChatHistory);

    const [typing, setTyping] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const [isOpen, setIsOpen] = useState(false);

    // ==========================
    // Save Chat History
    // ==========================

    useEffect(() => {
        saveChatHistory(messages);
    }, [messages]);

    // ==========================
    // Chat Window Controls
    // ==========================

    const openChat = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeChat = useCallback(() => {
        setIsOpen(false);
    }, []);

    const toggleChat = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    // ==========================
    // Message Functions
    // ==========================

    const addMessage = useCallback((message) => {

        setMessages((prev) => [

            ...prev,

            {
                id: Date.now() + Math.random(),
                timestamp: new Date().toISOString(),
                ...message,
            },

        ]);

    }, []);

    const updateMessage = useCallback((id, updates) => {

        setMessages((prev) =>
            prev.map((message) =>
                message.id === id
                    ? {
                          ...message,
                          ...updates,
                      }
                    : message
            )
        );

    }, []);

    const removeMessage = useCallback((id) => {

        setMessages((prev) =>
            prev.filter((message) => message.id !== id)
        );

    }, []);

    const clearChat = useCallback(() => {

        setMessages([]);

        setError(null);

        clearChatHistory();

    }, []);

    // ==========================
    // Execute Chatbot Action
    // ==========================

    const executeAction = useCallback(

        (reply) => {

            if (!reply.action) return;

            switch (reply.action.type) {

                case "navigate":

                    setTimeout(() => {

                        navigate(reply.action.path);

                    }, 700);

                    break;

                default:

                    console.warn(
                        "Unknown chatbot action:",
                        reply.action.type
                    );

            }

        },

        [navigate]

    );

    // ==========================
    // Send Message
    // ==========================

    const sendMessage = useCallback(

        async (text) => {

            const message = text.trim();

            if (!message || typing || loading) {
                return;
            }

            setLoading(true);

            setTyping(true);

            setError(null);

            // -------------------------
            // User Message
            // -------------------------

            addMessage({

                sender: "user",

                type: "text",

                text: message,

            });

            try {

                await new Promise((resolve) =>
                    setTimeout(resolve, 600)
                );

                const reply = await chatbotService.processMessage(message);

                // -------------------------
                // Bot Message
                // -------------------------

                addMessage({

                    sender: "bot",

                    type: reply.type || "text",

                    text: reply.text || "",

                    title: reply.title || "",

                    data: reply.data || null,

                    products: reply.data || [],

                    action: reply.action || null,

                });

                // -------------------------
                // Execute Action
                // -------------------------

                executeAction(reply);

            } catch (err) {

                console.error("Chatbot Error:", err);

                setError(err);

                addMessage({

                    sender: "bot",

                    type: "error",

                    title: "AI-ShopSphere",

                    text:
                        "Sorry, something went wrong while processing your request.",

                });

            } finally {

                setTyping(false);

                setLoading(false);

            }

        },

        [
            typing,
            loading,
            addMessage,
            executeAction,
        ]

    );

    // ==========================
    // Return
    // ==========================

    return {

        // Chat Window

        isOpen,

        openChat,

        closeChat,

        toggleChat,

        // Messages

        messages,

        addMessage,

        updateMessage,

        removeMessage,

        clearChat,

        // Status

        loading,

        typing,

        error,

        setLoading,

        setTyping,

        setError,

        // Actions

        sendMessage,

    };

}

export default useChatbot;