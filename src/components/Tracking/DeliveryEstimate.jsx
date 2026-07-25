import "./DeliveryEstimate.css";

function DeliveryEstimate({ status }) {

    if (
        status === "Delivered" ||
        status === "Cancelled"
    ) {

        return null;

    }

    return (

        <div className="delivery-box">

            <h3>

                Estimated Delivery

            </h3>

            <p>

                3–5 Business Days

            </p>

        </div>

    );

}

export default DeliveryEstimate;