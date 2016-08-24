var express = require('express');
var router = express.Router();
var models = require('../models');
var Place = models.Place;
var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;


router.get('/', function(req,res,next){
	Hotel.findAll({})
		.then(function(hotels){
			Activity.findAll({})
				.then(function(activities){
					Restaurant.findAll({})
						.then (function(restaurants){
							res.render('index',{
								hotels: hotels,
								activities: activities,
								restaurants: restaurants,
							}); 
						})
				})
		})
		.catch(next);
});






module.exports = router;