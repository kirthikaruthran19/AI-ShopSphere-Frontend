import { Link } from "react-router-dom";
import {
    FaCheckDouble,
    FaTrashAlt,
} from "react-icons/fa";

import { useNotification } from "../../contexts/NotificationContext";

import NotificationItem from "./NotificationItem";

import "./NotificationDropdown.css";

function NotificationDropdown({

    closeDropdown,

}) {

    const {

        notifications,

        readNotification,

        readAll,

        clearAll,

    } = useNotification();

    const handleReadAll = async () => {

        await readAll();

    };

    const handleClearAll = async () => {

        await clearAll();

    };

    return (

        <div className="notification-dropdown">

            <div className="notification-header">

                <Link
                    to="/notifications"
                    className="notification-title"
                    onClick={closeDropdown}
                >

                    Notifications

                </Link>

                {

                    notifications.length > 0 && (

                        <div className="notification-actions">

                            <button
                                className="action-btn"
                                onClick={handleReadAll}
                                title="Mark all as read"
                            >

                                <FaCheckDouble />

                                <span>

                                    Read All

                                </span>

                            </button>

                            <button
                                className="action-btn danger"
                                onClick={handleClearAll}
                                title="Clear notifications"
                            >

                                <FaTrashAlt />

                                <span>

                                    Clear

                                </span>

                            </button>

                        </div>

                    )

                }

            </div>

            <div className="notification-body">

                {

                    notifications.length === 0 ? (

                        <div className="notification-empty">

                            <div className="empty-icon">

                                🔔

                            </div>

                            <h5>

                                No Notifications

                            </h5>

                            <p>

                                You're all caught up.

                            </p>

                        </div>

                    ) : (

                        notifications.map((notification) => (

                            <NotificationItem

                                key={notification.id}

                                notification={notification}

                                onRead={readNotification}

                            />

                        ))

                    )

                }

            </div>

        </div>

    );

}

export default NotificationDropdown;