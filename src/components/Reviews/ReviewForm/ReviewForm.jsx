import { useEffect, useState } from "react";

import "./ReviewForm.css";

function ReviewForm({
    initialData = null,
    onSubmit,
    loading = false,
    onCancel,
}) {
    const [rating, setRating] = useState(5);
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");

    useEffect(() => {
        if (initialData) {
            setRating(initialData.rating);
            setTitle(initialData.title);
            setComment(initialData.comment);
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            rating,
            title,
            comment,
        });

        if (!initialData) {
            setRating(5);
            setTitle("");
            setComment("");
        }
    };

    return (
        <div className="review-form-card">

            <h4 className="mb-4">
                {initialData ? "Edit Review" : "Write a Review"}
            </h4>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <label className="form-label">
                        Rating
                    </label>

                    <select
                        className="form-select"
                        value={rating}
                        onChange={(e) =>
                            setRating(Number(e.target.value))
                        }
                    >
                        <option value={5}>★★★★★ (5)</option>
                        <option value={4}>★★★★☆ (4)</option>
                        <option value={3}>★★★☆☆ (3)</option>
                        <option value={2}>★★☆☆☆ (2)</option>
                        <option value={1}>★☆☆☆☆ (1)</option>
                    </select>

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Title
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter review title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-4">

                    <label className="form-label">
                        Review
                    </label>

                    <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Share your experience..."
                        value={comment}
                        onChange={(e) =>
                            setComment(e.target.value)
                        }
                        required
                    />

                </div>

                <div className="review-form-actions">

                    {initialData && (
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        {loading
                            ? "Saving..."
                            : initialData
                            ? "Update Review"
                            : "Submit Review"}
                    </button>

                </div>

            </form>

        </div>
    );
}

export default ReviewForm;