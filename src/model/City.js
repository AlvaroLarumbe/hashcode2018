var fs = require('fs');
const Vehicle = require('./Vehicle.js');
const Ride = require('./Ride.js');

'use strict';

class City {
  
    constructor(dataset) {

        this.rides = [];
        this.vehicles = [];

        this.rows = 0;
        this.cols = 0;
        this.fleet = 0;
        this.nrides = 0;
        this.bonus = 0;
        this.tsteps = 0;

        if (fs.existsSync(dataset)) {

            var data = '';

            fs.readFileSync(dataset).toString().split("\n").forEach((line, index, arr) => {
                
                if (index === arr.length - 1 && line === "") { return; }

                data = line.split(' ');

                console.log(index + ': ' + line);
                console.log(data);

                if (index === 0) {

                    this.rows = parseInt(data[0]);
                    this.cols = parseInt(data[1]);
                    this.fleet = parseInt(data[2]);
                    this.nrides = parseInt(data[3]);
                    this.bonus = parseInt(data[4]);
                    this.tsteps = parseInt(data[5]);

                    if (this.fleet > 0) {
                        [...Array(this.f).keys()].forEach(v => this.vehicles.push(new Vehicle.Vehicle()));
                    } else {
                        console.log('Fleet needs at least 1 vehicle');
                        process.exit();
                    }
                } else {
                    new Ride.Ride(
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
