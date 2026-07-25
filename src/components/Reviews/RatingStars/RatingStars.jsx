import {
    FaStar,
    FaRegStar,
    FaStarHalfAlt,
} from "react-icons/fa";

import "./RatingStars.css";

function RatingStars({

    rating = 0,

    size = 18,

}) {

    const stars = [];

    for (let i = 1; i <= 5; i++) {

        if (rating >= i) {

            stars.push(
                <FaStar
                    key={i}
                    size={size}
                    className="star filled"
                />
            );

        } else if (rating >= i - 0.5) {

            stars.push(
                <FaStarHalfAlt
                    key={i}
                    size={size}
                    className="star filled"
                />
            );

        } else {

            stars.push(
                <FaRegStar
                    key={i}
                    size={size}
                    className="star"
                />
            );

        }

    }

    return (

        <div className="rating-stars">

            {stars}

        </div>

    );

}

export default RatingStars;