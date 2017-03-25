/**
 * Created by WILLIAM-TI on 25/03/2017.
 */
var stack = {
    array: [],
    undoStack: [],
    push: function (value) {
        this.undoStack.push(function () {
            this.array.pop();
        });
        return this.array.push(value);
    },
    pop: function () {
        var popped = this.array.pop();
        this.undoStack.push(function () {
            this.array.push(popped);
        });
        return popped;
    },
    isEmpty: function () {
        this.undoStack.pop().call(this);
    },
    undo: function () {
        this.undoStack.pop().call(this);
    }
};
console.log(stack.push('hello'));
console.log(stack.push('there'));
console.log(stack.push('javascript'));
console.log(stack.undo());
console.log(stack.undo());
console.log(stack.pop());
