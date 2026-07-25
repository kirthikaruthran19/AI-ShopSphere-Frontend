import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
    FiPackage,
    FiHeart,
    FiShoppingCart,
    FiLock,
    FiLogOut,
} from "react-icons/fi";

import { useAuth } from "../../../contexts/AuthContext";

import "./QuickActions.css";

function QuickActions({
    user,
}) {

    const navigate = useNavigate();

    const { logout } = useAuth();

    const actions = [

        {
            title: "My Orders",
            icon: <FiPackage />,
            onClick: () => navigate("/orders"),
        },

        {
            title: "Wishlist",
            icon: <FiHeart />,
            onClick: () => navigate("/wishlist"),
        },

        {
            title: "Cart",
            icon: <FiShoppingCart />,
            onClick: () => navigate("/cart"),
        },

        {
            title: "Change Password",
            icon: <FiLock />,
            onClick: () => navigate("/profile/change-password"),
        },

        {
            title: "Logout",
            icon: <FiLogOut />,
            onClick: logout,
            danger: true,
        },

    ];

    return (

        <div className="quick-actions">

            {

                actions.map((action, index) => (

                    <motion.button
                        key={action.title}
                        className={
                            `quick-action-card ${
                                action.danger
                                    ? "danger"
                                    : ""
                            }`
                        }
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: index * 0.1,
                        }}
                        whileHover={{
                            y: -5,
                        }}
                        whileTap={{
                            scale: 0.96,
                        }}
                        onClick={action.onClick}
                    >

                        <div className="quick-action-icon">

                            {action.icon}

                        </div>

                        <span>

                            {action.title}

                        </span>

                    </motion.button>

                ))

            }

        </div>

    );

}

export default QuickActions;