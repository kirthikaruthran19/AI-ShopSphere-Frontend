import {
    FiCreditCard,
    FiDollarSign,
} from "react-icons/fi";

import "./PaymentMethod.css";

function PaymentMethod({

    paymentMethod,

    setPaymentMethod,

}) {

    const methods = [

        {
            id: "razorpay",
            title: "Online Payment",
            description:
                "Pay securely using Razorpay (Cards, UPI, Wallets, Net Banking, EMI)",
            icon: <FiCreditCard />,
        },

        {
            id: "cod",
            title: "Cash on Delivery",
            description: "Pay when your order is delivered",
            icon: <FiDollarSign />,
        },

    ];

    return (

        <div className="payment-card">

            <h2>Payment Method</h2>

            <div className="payment-list">

                {methods.map((method) => (

                    <label
                        key={method.id}
                        className={
                            paymentMethod === method.id
                                ? "payment-option active"
                                : "payment-option"
                        }
                    >

                        <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={paymentMethod === method.id}
                            onChange={() =>
                                setPaymentMethod(method.id)
                            }
                        />

                        <div className="payment-icon">
                            {method.icon}
                        </div>

                        <div>

                            <h4>{method.title}</h4>

                            <p>{method.description}</p>

                        </div>

                    </label>

                ))}

            </div>

        </div>

    );

}

export default PaymentMethod;