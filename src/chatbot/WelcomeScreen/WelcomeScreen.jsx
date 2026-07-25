import { FiShoppingBag } from "react-icons/fi";

import SuggestedPrompts from "../SuggestedPrompts/SuggestedPrompts";
import QuickActions from "../QuickActions/QuickActions";

import "./WelcomeScreen.css";

function WelcomeScreen() {

    return (

        <section className="ai-chat-welcome">

            <div className="ai-chat-welcome-content">

                <div className="ai-chat-welcome-icon">
                    <FiShoppingBag />
                </div>

                <h2 className="ai-chat-welcome-title">
                    Welcome to AI-ShopSphere
                </h2>

                <p className="ai-chat-welcome-text">
                    Your personal AI shopping assistant is here to help you
                    discover products, compare items, manage your cart,
                    wishlist, orders and much more.
                </p>

            </div>

            <SuggestedPrompts />

            <QuickActions />

        </section>

    );

}

export default WelcomeScreen;