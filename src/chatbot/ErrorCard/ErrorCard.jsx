import "./ErrorCard.css";
import {
    FiAlertTriangle,
    FiRefreshCw,
} from "react-icons/fi";

function ErrorCard({
    title = "Something went wrong",
    message = "An unexpected error occurred. Please try again.",
    buttonText = "Try Again",
    onRetry,
}) {
    return (
        <div className="error-card">

            <div className="error-icon">
                <FiAlertTriangle />
            </div>

            <div className="error-content">

                <h5 className="error-title">
                    {title}
                </h5>

                <p className="error-message">
                    {message}
                </p>

            </div>

            {onRetry && (
                <button
                    className="error-button"
                    onClick={onRetry}
                >
                    <FiRefreshCw />
                    {buttonText}
                </button>
            )}

        </div>
    );
}

export default ErrorCard;