import "./TrackingCard.css";
import {
    FiPackage,
    FiCheckCircle,
    FiClock,
} from "react-icons/fi";

function TrackingCard({ tracking }) {

    if (!tracking) return null;

    return (

        <div className="tracking-card">

            <div className="tracking-header">

                <h5>
                    <FiPackage /> Order #{tracking.order_number}
                </h5>

                <span className="tracking-status">
                    {tracking.status}
                </span>

            </div>

            <div className="tracking-summary">

                <p>
                    <strong>Payment Status:</strong>{" "}
                    {tracking.payment_status}
                </p>

                <p>
                    <strong>Payment Method:</strong>{" "}
                    {tracking.payment_method}
                </p>

            </div>

            <div className="tracking-timeline">

                {tracking.tracking?.map((step, index) => (

                    <div
                        className="timeline-item"
                        key={index}
                    >

                        <div className="timeline-icon">
                            <FiCheckCircle />
                        </div>

                        <div className="timeline-content">

                            <h6>{step.status}</h6>

                            <p>{step.description}</p>

                            <small>
                                {new Date(step.updated_at).toLocaleString()}
                            </small>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default TrackingCard;