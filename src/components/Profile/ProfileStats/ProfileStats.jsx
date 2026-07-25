import { motion } from "framer-motion";
import {
    FiShoppingBag,
    FiHeart,
    FiShoppingCart,
    FiStar,
} from "react-icons/fi";

import "./ProfileStats.css";

function ProfileStats({

    orders = 0,
    wishlist = 0,
    cart = 0,
    reviews = 0,

}) {

    const stats = [

        {
            id: 1,
            title: "Orders",
            value: orders,
            icon: <FiShoppingBag />,
        },

        {
            id: 2,
            title: "Wishlist",
            value: wishlist,
            icon: <FiHeart />,
        },

        {
            id: 3,
            title: "Cart",
            value: cart,
            icon: <FiShoppingCart />,
        },

        {
            id: 4,
            title: "Reviews",
            value: reviews,
            icon: <FiStar />,
        },

    ];

    return (

        <div className="profile-stats">

            {

                stats.map((item, index) => (

                    <motion.div
                        key={item.id}
                        className="profile-stat-card"
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: index * 0.1,
                        }}
                    >

                        <div className="stat-icon">

                            {item.icon}

                        </div>

                        <div className="stat-content">

                            <h3>

                                {item.value}

                            </h3>

                            <p>

                                {item.title}

                            </p>

                        </div>

                    </motion.div>

                ))

            }

        </div>

    );

}

export default ProfileStats;