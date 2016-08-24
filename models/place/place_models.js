var db = require('./_db');
var Sequelize = require('sequelize');

var Place = db.define('place',{
	address: Sequelize.STRING,
	city: Sequelize.STRING,
	state: Sequelize.STRING,
	phone: Sequelize.STRING,
	location: Sequelize.ARRAY(Sequelize.FLOAT),
});

var Hotel = db.define('hotel',{
	name: Sequelize.STRING,
	num_stars: {
		type: Sequelize.INTEGER,
		validate: {
			max:5,
			min:1
		}
	},
	amenities:Sequelize.STRING,
});

var Activity = db.define('activity',{
	name: Sequelize.STRING,
	age_range: Sequelize.STRING,
});

var Restaurant = db.define('restaurant',{
	name: Sequelize.STRING,
	cuisine: Sequelize.STRING,
	price: {
		type: Sequelize.INTEGER,
		validate: {
			max:5,
			min:1
		}
	},
});

Restaurant.belongsTo(Place);
Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Place.hasMany(Restaurant);
Place.hasMany(Hotel);
Place.hasMany(Activity);

module.exports = {
	Restaurant: Restaurant,
	Activity: Activity,
	Place: Place,
	Hotel: Hotel,
};