const db = require('./conn');


class ReviewModel {

    constructor(id, reviewer_id, stars, title, review){

        this.id = id;
        this.reviewer_id = reviewer_id;
        this.stars = stars;
        this.title = title;
        this.revivew = review;
    }

    static async getAllReviewsByID(restID) {
        // get all the reviews for a given restaurant given a specific restaurant id .
        try {
            const response = await db.any(
                `select restaurant.name , review.title , review.stars, review.review, reviewer.name 
                from restaurant   inner join  review on restaurant.id = review.restaurant_id 
                inner join reviewer on reviewer.id = review.reviewer_id WHERE review.restaurant_id = ${restID}`)
            ;
            return response;
        } catch(error) {
            console.error('ERROR:', error);
            return error;
        }
    }
}

module.exports = ReviewModel;