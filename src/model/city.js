var fs = require('fs');
const Vehicle = require('./vehicle.js');
const Ride = require('./ride.js');

'use strict';

class City {
  
    constructor(dataset) {

        this.rides = [];
        this.vehicles = [];

        if (fs.existsSync(dataset)) {
            fs.readFileSync(dataset).toString().split("\n").forEach(function(line, index, arr) {
                if (index === arr.length - 1 && line === "") { return; }

                data = line.split(' ');

                if (index === 0) {
                    this.r = parseInt(data[0]);
                    this.c = parseInt(data[1]);
                    this.f = parseInt(data[2]);
                    this.n = parseInt(data[3]);
                    this.b = parseInt(data[4]);
                    this.t = parseInt(data[5]);

                    if (this.f > 0) {
                        [...Array(this.f).keys()].forEach(v => this.vehicles.push(new Vehicle()));
                    } else {
                        console.log('Fleet needs at least 1 vehicle');
                        process.exit();
                    }
                } else {
                    new Ride(
                        [parseInt(data[0]), parseInt(data[1])],
                        [parseInt(data[2]), parseInt(data[3])],
                        parseInt(data[4]),
                        parseInt(data[5])
                    )
                }
            });

            console.log('City has been created');
        } else {
            console.log('Dataset not found :(');
            process.exit();
        }
    }

    // We will look at static and subclassed methods shortly
}

module.exports.City = City;
