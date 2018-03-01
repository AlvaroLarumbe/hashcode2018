const init = require('./init.js');
const City = require('./model/City.js');

init.init();

let city = new City.City('./datasets/a_example.in');

city.nextStep();
let cont = 1;
for (var v of city.vehicles) {
    let rides = "";
    for (var r of v.rides) {
        rides = rides + " " + r;
    }
    // console.log(${cont} + " " + ${rides});
    console.log(`V#: ${cont} | Rides: ${rides}`);
}
