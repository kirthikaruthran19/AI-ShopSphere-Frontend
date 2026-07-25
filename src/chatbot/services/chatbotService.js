import api from "../../services/api";

const chatbotService = {

    async processMessage(message) {

        try {

            const response = await api.post("/chat/", {
                message,
            });

            const data = response.data;

            // -------------------------------
            // Navigation
            // -------------------------------

            if (data.type === "navigation") {

                return {
                    type: "navigation",
                    text: data.reply,
                    action: {
                        type: "navigate",
                        path: data.action,
                    },
                };

            }

            // -------------------------------
            // Products
            // -------------------------------

            if (data.type === "products") {

                return {
                    type: "product",
                    text: data.reply,
                    data: data.products,
                };

            }

            // -------------------------------
            // Cart
            // -------------------------------

            if (data.type === "cart") {

                return {
                    type: "cart",
                    text: data.reply,
                    data: data.data,
                };

            }

            // -------------------------------
            // Wishlist
            // -------------------------------

            if (data.type === "wishlist") {

                return {
                    type: "wishlist",
                    text: data.reply,
                    data: data.data,
                };

            }

            // -------------------------------
            // Orders
            // -------------------------------

            if (data.type === "orders") {

                return {
                    type: "orders",
                    text: data.reply,
                    data: data.data,
                };

            }

            // -------------------------------
            // Profile
            // -------------------------------

            if (data.type === "profile") {

                return {
                    type: "profile",
                    text: data.reply,
                    data: data.data,
                };

            }


            // -------------------------------
            // Payment
            // -------------------------------

            if (data.type === "payment") {

                return {
                    type: "payment",
                    text: data.reply,
                    data: data.data,
                };

            }

            // -------------------------------
            // Tracking
            // -------------------------------

            if (data.type === "tracking") {

                return {
                    type: "tracking",
                    text: data.reply,
                    data: data.data,
                };

            }
            // -------------------------------
            // Recommendations
            // -------------------------------

            if (data.type === "recommendation") {

                return {
                    type: "recommendation",
                    text: data.reply,
                    data: data.data,
                };

            }

            // -------------------------------
            // Notification
            // -------------------------------
            if (data.type === "notification") {

                return {

                    type: "notification",

                    text: data.reply,

                    data: data.data,

                };

            }


            // -------------------------------
            // Coupon
            // -------------------------------

            if (data.type === "coupon") {
                return {
                    type: "coupon",
                    text: data.reply,
                    data: data.data,
                };
            }

            // -------------------------------
            // Review
            // -------------------------------
            if (data.type === "reviews") {
                return {
                    type: "reviews",
                    text: data.reply,
                    data: data.data,
                };
            }

            // -------------------------------
            // Error
            // -------------------------------

            if (data.type === "error") {

                return {
                    type: "error",
                    text: data.reply,
                };

            }

            // -------------------------------
            // Default Text
            // -------------------------------

            return {
                type: "text",
                text: data.reply,
            };

        } catch (error) {

            console.error("Chatbot Error:", error);

            return {
                type: "error",
                text:
                    "Unable to connect to AI-ShopSphere Assistant. Please try again.",
            };

        }

    },

};

export default chatbotService;