import {
    FaCheckCircle,
    FaEdit,
    FaTrash,
} from "react-icons/fa";

import RatingStars from "../RatingStars/RatingStars";

import "./ReviewCard.css";

function ReviewCard({
    review,
    currentUser,
    onEdit,
    onDelete,
}) {

    // Support different backend response formats
    const reviewUserId =
        review.user?.id ||
        review.user_id ||
        review.user;

    const isOwner =
        currentUser &&
        currentUser.id === reviewUserId;

    return (
        <div className="review-card">

            <div className="review-header">

                <div>

                    <h5 className="review-user">

                        {review.username || review.user_name || "Anonymous"}

                        {review.verified_purchase && (

                            <span className="verified-badge">

                                <FaCheckCircle />

                                Verified Purchase

                            </span>

                        )}

                    </h5>

                    <RatingStars
                        rating={review.rating}
                        size={16}
                    />

                </div>

                {isOwner && (

                    <div className="review-actions">

                        <button
                            type="button"
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => onEdit(review)}
                        >
                            <FaEdit />
                        </button>

                        <button
                            type="button"
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => onDelete(review.id)}
                        >
                            <FaTrash />
                        </button>

                    </div>

                )}

            </div>

            <h6 className="review-title">
                {review.title}
            </h6>

            <p className="review-comment">
                {review.comment}
            </p>

            <small className="review-date">

                {review.created_at
                    ? new Date(review.created_at).toLocaleDateString()
                    : ""}

            </small>

        </div>
    );
}

export default ReviewCard;