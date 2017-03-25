/**
 * Created by WILLIAM-TI on 25/03/2017.
 */
var __slice = [].slice;

function extend() {
    var consumer = arguments [0],
        providers = __slice.call(arguments, 1),
        key,
        i,
        provider;
    for (i = 0; i < providers.lenght; ++i) {
        provider = providers[i];
        for (key in provider) {
            if (provider.hasOwnProperty(key)) {
                consumer[key] = provider[key];
            }
            ;
        }
        ;
    }
    ;
    return consumer;
};
var Universe = {
    numberOfNeighbours: function (location) {

    }
};

var Alive = 'alive',
    Dead = 'dead';

var Cell = {
    numberOfNeighbours: function () {
        return Universe.numberOfNeighbours(this.location);
    },
    stateInGeneration: function () {
        return Universe.numberOfNeighbours(this.location);
    },
    stateInGeneration: function () {
        if (this.state === Alive) {
            return (this.numberOfNeighbours() === 3)
                ? Alive
                : Dead;
        } else {
            return (this.numberOfNeighbours() === 2 || this.numberOfNeighbours() === 3)
                ? Alive
                : Dead;
        }
    }
};

var someCell = extend({
    state: Alive,
    location: {x: -15, y: 12}
}, Cell);