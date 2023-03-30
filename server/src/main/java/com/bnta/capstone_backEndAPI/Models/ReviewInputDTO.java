package com.bnta.capstone_backEndAPI.Models;

public class ReviewInputDTO {
    private String review;

    private int rating;

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        if (rating > 5) {
            this.rating = 5;
        } else if (rating < 0) {
            this.rating = 0;
        } else {
            this.rating = rating;
        }
    }
}




