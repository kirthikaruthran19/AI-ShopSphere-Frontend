import { useState } from "react";
import "./CouponBox.css";

function CouponBox() {

    const [coupon, setCoupon] = useState("");

    const handleApply = () => {

        const code = coupon.trim().toUpperCase();

        if (!code) {

            alert("Please enter a coupon code.");

            return;

        }

        if (code === "SAVE10") {

            alert("Coupon applied successfully!");

        } else if (code === "WELCOME20") {

            alert("Coupon applied successfully!");

        } else {

            alert("Invalid coupon code.");

        }

    };

    return (

        <div className="coupon-box">

            <h3>Have a Coupon?</h3>

            <p>
                Enter your coupon code below.
            </p>

            <div className="coupon-input">

                <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                />

                <button onClick={handleApply}>
                    Apply
                </button>

            </div>

        </div>

    );

}

export default CouponBox;