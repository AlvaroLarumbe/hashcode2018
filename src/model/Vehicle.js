"use strict";

class Vehicle {

    constructor (pos = [0, 0]) {
        this._pos = pos;
        this._ride = null;

        this._rides = [];
    }

    toString () {
        return `VPos: ${this._pos} | InUse: ${this._in_use}g | EndPos: ${this._end}g `
    }

    print () {
        console.log( this.toString() );
    }

    get pos() {
        return this._pos;
    }

    set pos(value) {
        this._pos = value;
    }

    get ride() {
        return this._ride;
    }

    set ride(value) {
        this._ride = value;
    }

    get rides() {
        return this._rides;
    }

    hasRide() {
        return this._ride !== null;
    }

    step() {
        
        if (this.hasRide()) {

            if (this._pos[0] !== this._ride.end[0]) this._pos[0] += Math.sign(this._ride.end[0], this._pos[0]);
            else this._pos[1] += Math.sign(this._ride.end[1], this._pos[1]);

            if (this._pos[0] === this._ride.end[0] && this._pos[1] === this._ride.end[1]) {
                this._rides.push(this._ride);
                this.ride = null;

                console.log('Coche llega');
            }
        }
    }

    calculate(destPos) {

        let rideTRem = 0;

        return this.hasRide() ? Number.POSITIVE_INFINITY : Math.abs(this._pos[0] - destPos[0]) + Math.abs(this._pos[1]-destPos[1]);
    }
}

module.exports.Vehicle = Vehicle;