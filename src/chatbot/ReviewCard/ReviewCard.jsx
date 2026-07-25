import "./ReviewCard.css";

function ReviewCard({ reviewData }) {
    if (!reviewData) return null;

    const {
        product,
        average_rating,
        total_reviews,
        reviews = [],
    } = reviewData;

    return (
        <div className="review-card">
            <h5>{product}</h5>

            <div className="review-summary">
                <strong>⭐ {average_rating}</strong>
                <span> ({total_reviews} reviews)</span>
            </div>

            <div className="review-list">
                {reviews.map((review) => (
                    <div className="review-item" key={review.id}>
                        <h6>{review.title}</h6>

                        <div>⭐ {review.rating}/5</div>

                        <p>{review.comment}</p>

                        <small>— {review.username}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewCard;