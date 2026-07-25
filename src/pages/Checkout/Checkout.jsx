import { useState } from "react";

import ShippingForm from "./ShippingForm";
import PaymentMethod from "./PaymentMethod";
import OrderReview from "./OrderReview";

import "./Checkout.css";

function Checkout() {

    const [shippingData, setShippingData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postal_code: "",
        country: "India",
    });

    const [errors, setErrors] = useState({});

    // Available values:
    // "razorpay" -> Online Payment
    // "cod"       -> Cash on Delivery
    const [paymentMethod, setPaymentMethod] = useState("razorpay");

    return (

        <section className="checkout-page">

            <div className="container">

                <h1 className="checkout-title">
                    Checkout
                </h1>

                <div className="checkout-layout">

                    <div className="checkout-left">

                        <ShippingForm
                            shippingData={shippingData}
                            setShippingData={setShippingData}
                            errors={errors}
                            setErrors={setErrors}
                        />

                        <PaymentMethod
                            paymentMethod={paymentMethod}
                            setPaymentMethod={setPaymentMethod}
                        />

                    </div>

                    <div className="checkout-right">

                        <OrderReview
                            shippingData={shippingData}
                            paymentMethod={paymentMethod}
                        />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Checkout;