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
}

module.exports.Vehicle = Vehicle;