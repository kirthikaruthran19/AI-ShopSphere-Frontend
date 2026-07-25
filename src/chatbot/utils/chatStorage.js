const STORAGE_KEY = "ai_shopsphere_chat_history";

export const saveChatHistory = (messages) => {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(messages)
        );
    } catch (error) {
        console.error("Failed to save chat history:", error);
    }
};

export const loadChatHistory = () => {
    try {
        const history = localStorage.getItem(STORAGE_KEY);

        if (!history) {
            return [];
        }

        return JSON.parse(history);

    } catch (error) {

        console.error("Failed to load chat history:", error);

        return [];

    }
};

export const clearChatHistory = () => {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error("Failed to clear chat history:", error);
    }
};