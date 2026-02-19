// src/components/ReviewSection.js

import React from 'react';

const ReviewSection = ({ reviews }) => {
    const totalReviews = reviews.length;
    const positiveReviews = reviews.filter(review => review.rating >= 4).length;
    const ratingPercentage = totalReviews > 0 ? (positiveReviews / totalReviews) * 100 : 0;

    return (
        <div>
            <h3>Customer Reviews</h3>
            <p>{totalReviews} Reviews - {ratingPercentage.toFixed(2)}% Positive</p>
            {/* Render reviews here */}
        </div>
    );
};

export default ReviewSection;