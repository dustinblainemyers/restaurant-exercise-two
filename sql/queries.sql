-- List all restaurants.

SELECT * FROM restaurant

-- List a single restaurant by ID.

SELECT * FROM restaurant WHERE restaurant.id = 2;

-- List all the reviews for a given restaurant given a specific restaurant ID.


SELECT * FROM restaurant INNER JOIN review ON review.restaurant_id = restaurant.id  order by restaurant.id;

-- List all the reviews for a given restaurant, given a specific restaurant name.

SELECT * FROM restaurant INNER JOIN review ON  review.restaurant_id = restaurant.id AND restaurant.name = 'Strange Burrito'  order by restaurant.id;

-- List all the reviews for a given reviewer, given a specific author name.

SELECT * FROM reviewer INNER JOIN review ON  reviewer.id = review.reviewer_id AND reviewer.name = 'Clide Evans'  order by review.id;

-- List all the reviews along with the restaurant they were written for.
-- In the query result, select the restaurant name and the review

SELECT restaurant.name, review.title FROM review INNER JOIN restaurant ON  restaurant.id = review.restaurant_id  order by review.id;

-- List all the reviews along with the restaurant, and the reviewer's name.
-- The result should have the restaurant name, the review text, and the reviewer name.
-- Hint: you might need to do a three-way join - i.e. joining all three tables together.


select restaurant.name , review.title , reviewer.name 
from restaurant   inner join  review on restaurant.id = review.restaurant_id 
inner join reviewer on reviewer.id = review.reviewer_id;


