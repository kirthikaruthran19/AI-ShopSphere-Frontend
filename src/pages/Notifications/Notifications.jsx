import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaBell,
    FaCheckDouble,
    FaTrashAlt,
} from "react-icons/fa";

import { useNotification } from "../../contexts/NotificationContext";

import "./Notifications.css";

function Notifications() {

    const {
        notifications,
        readNotification,
        readAll,
        clearAll,
    } = useNotification();

    const [filter, setFilter] = useState("all");

    const filteredNotifications = useMemo(() => {

        switch (filter) {

            case "unread":
                return notifications.filter(
                    (item) => !item.is_read
                );

            case "read":
                return notifications.filter(
                    (item) => item.is_read
                );

            default:
                return notifications;

        }

    }, [notifications, filter]);

    const unreadCount = notifications.filter(
        (item) => !item.is_read
    ).length;

    const handleRead = (notification) => {

        if (!notification.is_read) {

            readNotification(notification.id);

        }

    };

    return (

        <div className="notifications-page container py-5">

            <div className="notifications-header">

                <div>

                    <h2>

                        <FaBell />

                        Notifications

                    </h2>

                    <span className="notification-count">

                        {notifications.length} Notifications

                    </span>

                </div>

                <div className="notification-actions">

                    <button
                        className="primary-btn"
                        onClick={readAll}
                    >

                        <FaCheckDouble />

                        Mark All Read

                    </button>

                    <button
                        className="danger-btn"
                        onClick={clearAll}
                    >

                        <FaTrashAlt />

                        Clear All

                    </button>

                </div>

            </div>

            <div className="notification-filter">

                <button

                    className={
                        filter === "all"
                            ? "active"
                            : ""
                    }

                    onClick={() =>
                        setFilter("all")
                    }

                >

                    All

                </button>

                <button

                    className={
                        filter === "unread"
                            ? "active"
                            : ""
                    }

                    onClick={() =>
                        setFilter("unread")
                    }

                >

                    Unread

                    {

                        unreadCount > 0 && (

                            <span className="filter-badge">

                                {unreadCount}

                            </span>

                        )

                    }

                </button>

                <button

                    className={
                        filter === "read"
                            ? "active"
                            : ""
                    }

                    onClick={() =>
                        setFilter("read")
                    }

                >

                    Read

                </button>

            </div>

            <AnimatePresence mode="wait">

                {

                    filteredNotifications.length === 0 ? (

                        <motion.div

                            className="empty-notifications"

                            initial={{
                                opacity: 0,
                                scale: .95,
                            }}

                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}

                            exit={{
                                opacity: 0,
                            }}

                        >

                            <FaBell className="empty-icon" />

                            <h4>

                                No Notifications

                            </h4>

                            <p>

                                You're all caught up.

                            </p>

                        </motion.div>

                    ) : (

                        filteredNotifications.map((notification) => (

                            <motion.div

                                key={notification.id}

                                layout

                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}

                                exit={{
                                    opacity: 0,
                                    y: -20,
                                }}

                                whileHover={{
                                    y: -4,
                                }}

                                whileTap={{
                                    scale: .98,
                                }}

                                className={`notification-card ${
                                    notification.is_read
                                        ? ""
                                        : "unread"
                                }`}

                                onClick={() =>
                                    handleRead(notification)
                                }

                            >

                                <div className="card-header">

                                    <h5>

                                        {notification.title}

                                    </h5>

                                    {

                                        !notification.is_read && (

                                            <span className="status-dot" />

                                        )

                                    }

                                </div>

                                <p>

                                    {notification.message}

                                </p>

                                <small>

                                    {

                                        new Date(
                                            notification.created_at
                                        ).toLocaleString()

                                    }

                                </small>

                            </motion.div>

                        ))

                    )

                }

            </AnimatePresence>

        </div>

    );

}

export default Notifications;