var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* Declaring a tuple. */
var people = ['Marilzon', 'Sousa', 30];
var fruits = ['orange', 'mellons'];
var buyFruits = __spreadArray([10, true], fruits, true);
var listOfPeople = function (names, ages) {
    return __spreadArray(__spreadArray([], names, true), ages, true);
};
console.log(listOfPeople(['Marilzon', 'Sousa'], [30, 30]));
