// Assuming this is the file responsible for calculating percentages
function calculateReviewPercentage(totalReviews, positiveReviews) {
    if (totalReviews === 0) return 0;
    return (positiveReviews / totalReviews) * 100;
}

// Update the function call to ensure it uses the correct parameters
const totalReviews = getTotalReviews(); // Fetch total reviews
const positiveReviews = getPositiveReviews(); // Fetch positive reviews
const percentage = calculateReviewPercentage(totalReviews, positiveReviews);

// Ensure that the displayed percentage is accurate
displayPercentage(percentage);