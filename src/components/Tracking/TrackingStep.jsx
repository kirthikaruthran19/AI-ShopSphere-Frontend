import "./TrackingStep.css";

const ORDER_STEPS = [
    "Placed",
    "Confirmed",
    "Packed",
    "Shipped",
    "Out for Delivery",
    "Delivered",
];

function TrackingStep({

    title,

    currentStatus,

    tracking,

}) {

    const currentIndex =
        ORDER_STEPS.indexOf(currentStatus);

    const stepIndex =
        ORDER_STEPS.indexOf(title);

    const completed =
        stepIndex <= currentIndex;

    const history = tracking.find(
        item => item.status === title
    );

    return (

        <div
            className={`tracking-step ${
                completed ? "completed" : ""
            }`}
        >

            <div className="step-circle">

                {completed ? "✓" : ""}

            </div>

            <div className="step-content">

                <h4>{title}</h4>

                <p>

                    {history?.description ||
                        "Waiting..."}

                </p>

                {history && (

                    <span>

                        {new Date(
                            history.updated_at
                        ).toLocaleString()}

                    </span>

                )}

            </div>

        </div>

    );

}

export default TrackingStep;