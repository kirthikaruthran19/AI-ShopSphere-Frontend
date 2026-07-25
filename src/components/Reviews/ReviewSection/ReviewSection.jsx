import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
    getProductReviews,
    getRatingSummary,
    createReview,
    updateReview,
    deleteReview,
} from "../../../services/reviewService";

import RatingSummary from "../RatingSummary/RatingSummary";
import ReviewForm from "../ReviewForm/ReviewForm";
import ReviewCard from "../ReviewCard/ReviewCard";

import { useAuth } from "../../../contexts/AuthContext";

import "./ReviewSection.css";

function ReviewSection({ productId }) {
    const { user, isAuthenticated } = useAuth();

    const [reviews, setReviews] = useState([]);
    const [summary, setSummary] = useState(null);

    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    const [editingReview, setEditingReview] = useState(null);

    useEffect(() => {
        if (productId) {
            loadReviews();
        }
    }, [productId]);

    const loadReviews = async () => {
        try {
            setLoading(true);

            const [reviewData, summaryData] = await Promise.all([
                getProductReviews(productId),
                getRatingSummary(productId),
            ]);

            setReviews(reviewData);
            setSummary(summaryData);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load reviews.");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (formData) => {
        try {
            setSubmitting(true);

            if (editingReview) {
                await updateReview(editingReview.id, formData);

                toast.success("Review updated successfully.");
            } else {
                await createReview({
                    ...formData,
                    product: productId,
                });

                toast.success("Review submitted successfully.");
            }

            setEditingReview(null);

            loadReviews();
        } catch (error) {
            console.error(error);

            toast.error(
                error?.response?.data?.detail ||
                "Unable to save review."
            );
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (reviewId) => {
        if (!window.confirm("Delete this review?")) {
            return;
        }

        try {
            await deleteReview(reviewId);

            toast.success("Review deleted.");

            loadReviews();
        } catch (error) {
            console.error(error);

            toast.error("Unable to delete review.");
        }
    };

    if (loading) {
        return (
            <div className="review-loading text-center py-5">

                <div
                    className="spinner-border text-primary"
                    role="status"
                />

            </div>
        );
    }

    return (
        <section className="review-section">

            <h3 className="review-heading">

                Customer Reviews

            </h3>

            <RatingSummary summary={summary} />

            {isAuthenticated ? (
                <ReviewForm
                    initialData={editingReview}
                    onSubmit={handleSubmit}
                    loading={submitting}
                    onCancel={() => setEditingReview(null)}
                />
            ) : (
                <div className="alert alert-info">

                    Login to write a review.

                </div>
            )}

            {reviews.length === 0 ? (

                <div className="text-center py-5">

                    <h5>No Reviews Yet</h5>

                    <p className="text-muted">

                        Be the first customer to review this product.

                    </p>

                </div>

            ) : (

                reviews.map((review) => (

                    <ReviewCard
                        key={review.id}
                        review={review}
                        currentUser={user}
                        onEdit={setEditingReview}
                        onDelete={handleDelete}
                    />

                ))

            )}

        </section>
    );
}

export default ReviewSection;