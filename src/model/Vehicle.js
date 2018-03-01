"use strict";

class Vehicle {

    constructor (pos, ride) {
        this._pos = pos;
        this._ride = ride;
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

    hasRide() {
        return this._ride !== null;
    }

    calculate(destPos) {
        let rideTRem = 0;
        if (this.hasRide()) {
            rideTRem = this._ride.calculateTime(this._pos);
        }

        let start = this.hasRide() ? this._ride.end : this._pos;

        return Math.abs(start[0]-destPos[0]) + Math.abs(start[1]-destPos[1]) + rideTRem;
    }
}

module.exports.Vehicle = Vehicle;