import "./DealCard.css";
import { FiTag, FiClock, FiArrowRight } from "react-icons/fi";

function DealCard({
    image,
    title,
    description,
    originalPrice,
    dealPrice,
    discount,
    expiresIn,
    onViewDeal,
}) {
    return (
        <div className="deal-card">

            <div className="deal-badge">
                <FiTag />
                <span>{discount}% OFF</span>
            </div>

            <div className="deal-image-wrapper">
                <img
                    src={image}
                    alt={title}
                    className="deal-image"
                />
            </div>

            <div className="deal-content">

                <h5 className="deal-title">
                    {title}
                </h5>

                <p className="deal-description">
                    {description}
                </p>

                <div className="deal-price">

                    <span className="deal-original-price">
                        ₹{originalPrice.toLocaleString()}
                    </span>

                    <span className="deal-sale-price">
                        ₹{dealPrice.toLocaleString()}
                    </span>

                </div>

                <div className="deal-expiry">
                    <FiClock />
                    <span>{expiresIn}</span>
                </div>

                <button
                    className="deal-btn"
                    onClick={onViewDeal}
                >
                    View Deal
                    <FiArrowRight />
                </button>

            </div>

        </div>
    );
}

export default DealCard;