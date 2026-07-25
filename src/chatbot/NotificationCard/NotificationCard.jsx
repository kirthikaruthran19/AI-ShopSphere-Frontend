import "./NotificationCard.css";
import {
    FiCheckCircle,
    FiAlertCircle,
    FiInfo,
    FiXCircle,
    FiBell,
    FiClock,
} from "react-icons/fi";

const iconMap = {
    success: <FiCheckCircle />,
    info: <FiInfo />,
    warning: <FiAlertCircle />,
    error: <FiXCircle />,
};

function NotificationCard({ notification }) {

    if (!notification) return null;

    const {
        type = "info",
        title,
        message,
        time,
    } = notification;

    return (

        <div className={`notification-card ${type}`}>

            <div className="notification-header">

                <div className="notification-icon">

                    {iconMap[type] || <FiBell />}

                </div>

                <div>

                    <h6 className="notification-title">
                        {title}
                    </h6>

                    {time && (
                        <div className="notification-time">
                            <FiClock />
                            <span>{time}</span>
                        </div>
                    )}

                </div>

            </div>

            <p className="notification-message">
                {message}
            </p>

        </div>

    );

}

export default NotificationCard;