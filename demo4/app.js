/**
 * Created by youpeng on 16/5/18.
 */
function printLabel(labelObj) {
    console.log(labelObj.label + labelObj.age);
}
var obj = { label: 'Hello', age: 25 };
printLabel(obj);
var search;
search = function (res, sub) {
    var result = res.search(sub);
    if (result != -1) {
        return true;
    }
    else {
        return false;
    }
};
var Arr;
Arr = ['you', 'peng'];
console.log(Arr);
var Clock = (function () {
    function Clock() {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var s = {};
s.color = 'red';
s.penWidth = '100';
s.slideLength = 2;
console.log(s);
//# sourceMappingURL=app.js.map