// ===============================
// Chatbot Configuration
// ===============================

export const CHATBOT_CONFIG = {
    NAME: "AI-ShopSphere Assistant",

    PLACEHOLDER: "Ask me anything about products...",

    WELCOME_TITLE: "Welcome to AI-ShopSphere",

    WELCOME_MESSAGE:
        "I'm your AI shopping assistant. I can help you discover products, compare items, manage your cart, wishlist, and orders.",

    TYPING_TEXT: "AI is typing...",

    ERROR_MESSAGE:
        "Sorry, something went wrong. Please try again.",

    MAX_MESSAGES: 100,
};

// ===============================
// Message Types
// ===============================

export const MESSAGE_TYPES = {

    TEXT: "text",

    PRODUCT: "product",

    COMPARISON: "comparison",

    CART: "cart",

    WISHLIST: "wishlist",

    ORDER: "order",

    SUMMARY: "summary",

    PROFILE: "profile",

    DEAL: "deal",

    NOTIFICATION: "notification",

    LOADING: "loading",

    ERROR: "error",

    EMPTY: "empty",

};

// ===============================
// Sender Types
// ===============================

export const SENDERS = {

    USER: "user",

    BOT: "bot",

};

// ===============================
// Suggested Prompts
// ===============================

export const SUGGESTED_PROMPTS = [

    "Show today's deals",

    "Recommend laptops",

    "Compare iPhone and Samsung",

    "View my cart",

    "View my wishlist",

    "Track my orders",

    "Show my profile",

    "Best gaming laptop",

];

// ===============================
// Quick Actions
// ===============================

export const QUICK_ACTIONS = [

    {
        id: 1,
        label: "Browse Products",
        action: "browse products",
    },

    {
        id: 2,
        label: "Today's Deals",
        action: "today's deals",
    },

    {
        id: 3,
        label: "My Cart",
        action: "my cart",
    },

    {
        id: 4,
        label: "Wishlist",
        action: "wishlist",
    },

    {
        id: 5,
        label: "My Orders",
        action: "orders",
    },

    {
        id: 6,
        label: "My Profile",
        action: "profile",
    },

];

// ===============================
// Local Storage Keys
// ===============================

export const STORAGE_KEYS = {

    CHAT_HISTORY: "chatbot_history",

};

// ===============================
// Animation Timing
// ===============================

export const CHATBOT_TIMINGS = {

    TYPING_DELAY: 600,

    SCROLL_DELAY: 150,

};