function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.searchReview = function (keyword) {
    var filteredReviews = reviews.filter(function (review) {
        return review.name.toUpperCase().includes(keyword.toUpperCase());
    });

    if (filteredReviews.length) {
        this.onSuccess(filteredReviews);
    } else {
        this.onFailed(keyword + " is not found");
    }
};