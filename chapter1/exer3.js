/**
 * Created by WILLIAM-TI on 25/03/2017.
 */

function delegateToOwn(receiver, propertyName, methods) {
    var temporaryMetaObjct;
    if (methods == null) {
        temporaryMetaObjct = receiver[propertyName];
        methods = Object.keys(temporaryMetaObjct).filter(function (methodName) {
            return typeof (temporaryMetaObjct[methodName] == 'function');
        });
    }
    methods.forEach(function (methodName) {
        receiver[methodName] = function () {
            var metaobject = receiver[propertyName];
            return metaobject[methodName].apply(receiver, arguments);
        };
    });
    return receiver;
};
var Alive = {
    alive: function () {
        return true;
    },
    stateInNextGeneration: function () {
        return (this.numberOfNeighbours() === 3)
            ? Alive
            : Dead;

    }
};
var Dead = {
    alive: function () {
        return false;
    },
    stateInNextGeneration: function () {
        return (this.numberOfNeighbours() === 2 || this.numberOfNeighbours() === 3)
            ? Alive
            : Dead;
    }
};

var Cell = {
    numberOfNeighbours: function () {
        return thisGame.numberOfNeighbours(this.location);
    }
}
delegateToOwn(Cell, 'state', ['alive', 'aliveNextGeneration']);

var someCell = extend({
    state: Alive,
    location: {x: -15, y: 12}
}, Cell);
