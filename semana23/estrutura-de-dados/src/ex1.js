"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.LinkedListNode = void 0;
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode() {
        this.next = null;
    }
    LinkedListNode.prototype.getData = function () {
        return this.value;
    };
    LinkedListNode.prototype.getNext = function () {
        return this.next;
    };
    return LinkedListNode;
}());
exports.LinkedListNode = LinkedListNode;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.start = null;
    }
    LinkedList.prototype.appendToTail = function (value) {
        var newNode = new LinkedListNode();
        newNode.value = value;
        if (this.start === null) {
            this.start = newNode;
            return;
        }
        else {
            var node = this.start;
            while (node.next !== null)
                node = node.next;
            node.next = newNode;
        }
    };
    LinkedList.prototype.print = function () {
        var newNode = this.start;
        var i = 1;
        while (newNode !== undefined) {
            console.log("Elemento " + i + ": ", newNode.getData());
            newNode = newNode.getNext();
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
