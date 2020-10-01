"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var ex1_1 = require("./ex1");
var Queue = /** @class */ (function () {
    function Queue() {
        this.nodes = new ex1_1.LinkedList();
    }
    Queue.prototype.isEmpty = function () {
        return this.nodes.start === undefined;
    };
    Queue.prototype.enqueue = function (value) {
        this.nodes.appendToTail(value);
    };
    Queue.prototype.dequeue = function () {
        if (this.nodes.start) {
            var nodeToDequeue = this.nodes.start;
            this.nodes.start = this.nodes.start.getNext();
            return nodeToDequeue || undefined;
        }
        return undefined;
    };
    Queue.prototype.print = function () {
        this.nodes.print();
    };
    return Queue;
}());
exports.Queue = Queue;
