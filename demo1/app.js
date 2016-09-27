/**
 * Created by youpeng on 16/5/13.
 */
var isDone = true;
console.log(isDone);
var decimal = 6;
var hex = 0xf00d;
var binary = 0x1010;
var octal = 0x774;
console.log(decimal, hex, binary, octal);
var color = "blue";
console.log(color);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var list = ['a', 'b', 'c'];
console.log(list);
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure);
function tell() {
    return 'hello';
}
alert(tell());
function warnUser() {
    alert("This is my warning message");
}
warnUser();
//# sourceMappingURL=app.js.map