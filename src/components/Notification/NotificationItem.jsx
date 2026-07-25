import {
    FaBox,
    FaCreditCard,
    FaUserCircle,
    FaStar,
    FaBell,
    FaCircle,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";

import "./NotificationItem.css";

function NotificationItem({

    notification,

    onRead,

}) {

    const getIcon = (type) => {

        switch (type) {

            case "order":
                return <FaBox className="icon order" />;

            case "payment":
                return <FaCreditCard className="icon payment" />;

            case "review":
                return <FaStar className="icon review" />;

            case "account":
                return <FaUserCircle className="icon account" />;

            default:
                return <FaBell className="icon system" />;

        }

    };

    const handleClick = () => {

        if (!notification.is_read) {

            onRead(notification.id);

        }

    };

    return (

        <motion.div

            layout

            whileHover={{
                x: 6,
                transition: {
                    duration: 0.2,
                },
            }}

            whileTap={{
                scale: 0.98,
            }}

            className={`notification-item ${
                notification.is_read
                    ? ""
                    : "unread"
            }`}

            onClick={handleClick}

        >

            <div className="notification-icon">

                {getIcon(notification.notification_type)}

            </div>

            <div className="notification-content">

                <div className="notification-top">

                    <h6>

                        {notification.title}

                    </h6>

                    {

                        !notification.is_read && (

                            <FaCircle className="unread-dot" />

                        )

                    }

                </div>

                <p>

                    {notification.message}

                </p>

                <small>

                    {formatDistanceToNow(

                        new Date(notification.created_at),

                        {

                            addSuffix: true,

                        }

                    )}

                </small>

            </div>

        </motion.div>

    );

}

export default NotificationItem;