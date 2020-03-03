const db = require('./conn');


class RestaurantModel {

    constructor(id, name, distance, stars, category, favorite_dish, takeout, ate_last){

        this.id = id;
        this.name = name;
        this.distance = distance;
        this.stars = stars;
        this.category = category;
        this.favorite_dish = favorite_dish;
        this.takeout = takeout;
        this.ate_last = ate_last;

    }

    static async getAllRestaurants() {
        try {
            const response = await db.any(
                `SELECT * FROM restaurant;`
            );
            return response;
        } catch(error) {
            console.error('ERROR:', error);
            return error;
        }
    }

    static async getById(id) {
        try {


            const response = await db.any(`SELECT * FROM restaurant WHERE id = ${id} ` );
            return response;
        } catch (error) {
            console.error('Error', error);
        }
    }
}

module.exports = RestaurantModel;