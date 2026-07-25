import TrackingStep from "./TrackingStep";

import "./TrackingTimeline.css";

const ORDER_STEPS = [
    "Placed",
    "Confirmed",
    "Packed",
    "Shipped",
    "Out for Delivery",
    "Delivered",
];

function TrackingTimeline({

    tracking,
    currentStatus,

}) {

    return (

        <div className="tracking-timeline">

            {ORDER_STEPS.map((step, index) => (

                <TrackingStep

                    key={step}

                    title={step}

                    index={index}

                    currentStatus={currentStatus}

                    tracking={tracking}

                />

            ))}

        </div>

    );

}

export default TrackingTimeline;