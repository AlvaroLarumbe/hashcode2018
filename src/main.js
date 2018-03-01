const init = require('./init.js');
const City = require('./model/City.js');

init.init();

let city = new City.City('./datasets/a_example.in');

city.nextStep();



for (var v of city.vehicles) {
    let cont = 0;
    let rides = "";
    for (var r of v.rides) {
        rides = rides + " " + r;
        cont++;
    }
    console.log(`${cont} ${rides}`);
}
