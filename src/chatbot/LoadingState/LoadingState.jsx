import "./LoadingState.css";

function LoadingState({
    text = "Loading...",
    variant = "default",
}) {
    return (
        <div className={`chat-loading ${variant}`}>

            <div className="chat-loading-spinner">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <p className="chat-loading-text">
                {text}
            </p>

        </div>
    );
}

export default LoadingState;