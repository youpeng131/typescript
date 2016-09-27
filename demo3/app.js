/**
 * Created by youpeng on 16/5/17.
 */
// 函数-可变参数
function peolpeName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + '' + restOfName.join('-');
}
var pn = peolpeName('you', 'peng', 'is', 'a', 'IT');
console.log(pn);
// 函数-Lambads 和 this 关键字的使用 =>
var people = {
    name: ['you', 'peng', 'is', 'a', 'IT'],
    getName: function () {
        var _this = this;
        return function () {
            var i = Math.floor(Math.random() * 5);
            return {
                n: _this.name[i]
            };
        };
    }
};
var myName = people.getName();
console.log(myName().n);
function attr(nameOrage) {
    if (nameOrage && typeof nameOrage === 'string') {
        console.log('姓名');
    }
    else {
        console.log('年龄');
    }
}
attr('youpeng');
attr(30);
//# sourceMappingURL=app.js.map