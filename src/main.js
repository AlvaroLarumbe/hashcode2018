const init = require('./init.js');
const City = require('./model/city.js');

init.init();

var city = new City('./datasets/a_example.in');
