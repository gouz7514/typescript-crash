"use strict";
// Baic Types
let id = 5;
// let name: string = 'Kim hak jae'
let isHandsome = true;
let x = 'Hello';
let age;
let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 'hello', true];
// Tuple
let person = [1, 'Kim', true];
// Tuple Array
let employee;
employee = [
    [1, 'Kim'],
    [2, 'Park']
];
// Union
let pid = 22;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up);
console.log(Direction2.Left);
const user = {
    id: 1,
    name: 'Kim'
};
// export {}
