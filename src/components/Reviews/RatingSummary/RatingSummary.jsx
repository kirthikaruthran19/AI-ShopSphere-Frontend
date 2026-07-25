import RatingStars from "../RatingStars/RatingStars";

import "./RatingSummary.css";

function RatingSummary({ summary }) {

    if (!summary) return null;

    const ratings = [
        { star: 5, count: summary.five_star },
        { star: 4, count: summary.four_star },
        { star: 3, count: summary.three_star },
        { star: 2, count: summary.two_star },
        { star: 1, count: summary.one_star },
    ];

    return (

        <div className="rating-summary">

            <div className="rating-overview">

                <h2 className="average-rating">
                    {Number(summary.average_rating).toFixed(1)}
                </h2>

                <RatingStars
                    rating={summary.average_rating}
                    size={22}
                />

                <p className="review-count">
                    {summary.total_reviews} Reviews
                </p>

            </div>

            <div className="rating-breakdown">

                {ratings.map((item) => {

                    const percentage =
                        summary.total_reviews > 0
                            ? (item.count / summary.total_reviews) * 100
                            : 0;

                    return (

                        <div
                            className="rating-row"
                            key={item.star}
                        >

                            <span className="star-label">
                                {item.star} ★
                            </span>

                            <div className="progress">

                                <div
                                    className="progress-bar"
                                    style={{
                                        width: `${percentage}%`,
                                    }}
                                ></div>

                            </div>

                            <span className="rating-value">
                                {item.count}
                            </span>

                        </div>

                    );

                })}

            </div>

        </div>

    );

}

export default RatingSummary;