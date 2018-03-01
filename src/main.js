const init = require('./init.js');
const City = require('./model/City.js');

init.init();

var city = new City.City('./datasets/a_example.in');
