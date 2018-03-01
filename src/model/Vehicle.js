"use strict";

class Vehicle {

    constructor (pos = [0, 0], ride = null) {
        this._pos = pos;
        this._ride = ride;

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

        console.log('pos: ', this._pos);
        
        if (this.hasRide()) {

            console.log('dest: ', this._ride.end);

            if (this._pos[0] !== this._ride.end[0]) this._pos[0] += Math.sign(this._ride.end[0], this._pos[0]);
            else this._pos[1] += Math.sign(this._ride.end[1], this._pos[1]);

            if (this._pos === this._ride.end) {
                this._rides.push(this._ride);
                this.ride = null;
            }

            console.log('new pos: ', this._pos);
        } else console.log('no-move');
    }
}

module.exports.Vehicle = Vehicle;