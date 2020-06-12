const express = require('express'),
  router = express.Router();
restaurantModel = require('../models/restaurantModel');
reviewModel = require('../models/reviewModel');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const data = await restaurantModel.getAllRestaurants();

  res.render('template', {
    locals: {
      title: 'The Elite\s, a restaurant Review Site',
      data: data
    },
    partials: {
      partial: "partial-index",

    }


  });
});

router.get('/:entry_id?', async (req, res, next) => {
  const entryId = req.params.entry_id;
  const data = await restaurantModel.getById(entryId);
  const reviews = await reviewModel.getAllReviewsByID(entryId)
  
  
  res.render('template', {
      locals: {
          title: 'Your Choice:',
          data: data,
          testData: reviews
      },
      partials: {
          partial: 'partial-single-entry'
      }
  });
});

router.post('/', async function(req,res) {
  console.log('req body:', req.body) ;
  const {restaurant_id, review_title, review_text} = req.body;
  const postData = await restaurantModel.addReview(restaurant_id, review_title, review_text);
  console.log(postData);
  res.sendStatus(200);
});
module.exports = router;


///next step - write method to get one restaurant