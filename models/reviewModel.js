const db = require('./conn');


class ReviewModel {

    constructor(id, reviewer_id, stars, title, review){

        this.id = id;
        this.reviewer_id = reviewer_id;
        this.stars = stars;
        this.title = title;
        this.revivew = review;
    }

    static async getAllReviewsByID() {
        // get all the reviews for a given restaurant given a specific restaurant id .
        try {
            const response = await db.any(
                `SELECT * FROM restaurant INNER JOIN review ON review.restaurant_id = restaurant.id  AND restaurant.id = 1 order by restaurant.id;`
            );
            return response;
        } catch(error) {
            console.error('ERROR:', error);
            return error;
        }
    }
}

module.exports = ReviewModel;