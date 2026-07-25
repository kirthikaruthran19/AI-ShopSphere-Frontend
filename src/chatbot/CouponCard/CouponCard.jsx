import "./CouponCard.css";
import { FiTag, FiPercent, FiCalendar, FiCopy } from "react-icons/fi";

function CouponCard({ coupon }) {
    if (!coupon) return null;

    const copyCode = async () => {
        await navigator.clipboard.writeText(coupon.code);
    };

    return (
        <div className="coupon-card">

            <div className="coupon-header">
                <FiTag />
                <h6>{coupon.title}</h6>
            </div>

            <div className="coupon-code">
                {coupon.code}
            </div>

            <div className="coupon-info">
                <p>
                    <FiPercent /> {coupon.discount}
                </p>

                <p>
                    Minimum Order: {coupon.min_order}
                </p>

                <p>
                    <FiCalendar /> {coupon.expiry}
                </p>
            </div>

            <p className="coupon-description">
                {coupon.description}
            </p>

            <button
                className="coupon-copy-btn"
                onClick={copyCode}
            >
                <FiCopy />
                Copy Code
            </button>

        </div>
    );
}

export default CouponCard;