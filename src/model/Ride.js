'use strict';

class Ride {

    constructor(index = 0, start = [0, 0], end, earliestStart, latestFinish) {
        this._index = index;
        this._start = start;
        this._end = end;
        this._earliestStart = earliestStart;
        this._latestFinish = latestFinish;
    }

    get start() {
        return this._start;
    }

    set start(value) {
        this._start = value;
    }

    get end() {
        return this._end;
    }

    set end(value) {
        this._end = value;
    }

    get earliestStart() {
        return this._earliestStart;
    }

    set earliestStart(value) {
        this._earliestStart = value;
    }

    get latestFinish() {
        return this._latestFinish;
    }

    set latestFinish(value) {
        this._latestFinish = value;
    }

    calculateTime(vehiclePosition = this._start) {
        return Math.abs(vehiclePosition[0] - this_end[0]) + Math.abs(vehiclePosition[1] - this._end[1]);
    }

}

module.exports.Ride = Ride;
