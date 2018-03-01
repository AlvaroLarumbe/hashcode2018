var fs = require('fs');
const init = require('./init.js');
const City = require('./model/City.js');

init.init();

let city = new City.City('./datasets/a_example.in');
let ridesPerVeh = "./datasets/rides_per_vehicle.out";

city.nextStep();



for (var v of city.vehicles) {
    let cont = 0;
    let rides = "";
    for (var r of v.rides) {
        rides = rides + " " + r.index;
        cont++;
    }
    rides = cont + " " + rides;
    console.log(`${rides}`);
    fs.writeFileSync(ridesPerVeh, ${rides});
}
