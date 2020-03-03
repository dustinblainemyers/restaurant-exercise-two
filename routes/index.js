const express = require('express'),
  router = express.Router();
restaurantModel = require('../models/restaurantModel');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const data = await restaurantModel.getAllRestaurants();

  res.render('template', {
    locals: {
      title: 'Express',
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
  
  res.render('template', {
      locals: {
          title: 'Your Choice:',
          data: data
      },
      partials: {
          partial: 'partial-single-entry'
      }
  });
});

module.exports = router;


///next step - write method to get one restaurant