import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/global.css";
import "./styles/utilities.css";
import "./styles/animations.css";
import "./styles/responsive.css";

import App from "./App";

import { AuthProvider } from "./contexts/AuthContext";
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { OrderProvider } from "./contexts/OrderContext";
import { NotificationProvider } from "./contexts/NotificationContext";

import { ChatbotProvider } from "./chatbot/context/ChatbotContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>

            <AuthProvider>
                <ProductProvider>
                    <CartProvider>
                        <WishlistProvider>
                            <OrderProvider>
                                <NotificationProvider>
                                    <ChatbotProvider>

                                        <App />

                                        <ToastContainer
                                            position="top-right"
                                            autoClose={2500}
                                            hideProgressBar={false}
                                            newestOnTop
                                            closeOnClick
                                            pauseOnHover
                                            draggable
                                            theme="light"
                                        />

                                    </ChatbotProvider>
                                </NotificationProvider>
                            </OrderProvider>
                        </WishlistProvider>
                    </CartProvider>
                </ProductProvider>
            </AuthProvider>

        </BrowserRouter>
    </React.StrictMode>
);