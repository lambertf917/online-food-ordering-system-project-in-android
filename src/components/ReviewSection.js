import React from 'react';

const ReviewSection = ({ reviews }) => {
    const totalReviews = reviews.length;
    const positiveReviews = reviews.filter(review => review.rating >= 4).length;
    const percentage = totalReviews ? (positiveReviews / totalReviews) * 100 : 0;

    return (
        <div>
            <h3>Reviews</h3>
            <p>{`${percentage.toFixed(2)}% of reviews are positive.`}</p>
            {/* Render reviews here */}
        </div>
    );
};

export default ReviewSection;