/**
 * Created by youpeng on 16/5/13.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*创建类*/
//class person {
//    name: string;
//    age: number;
//    constructor(name: string, age: number) {
//        this.name = name;
//        this.age = age;
//    }
//    print() {
//        return this.name + '' + this.age;
//    }
//}
//
//let p = new person('you', 30);
//console.log(p.print());
/*继承*/
//class person {
//    name: string;
//    age: number;
//    constructor(name: string, age: number) {
//        this.name = name;
//        this.age = age;
//    }
//    tell() {
//        return this.name + '' + this.age;
//    }
//}
//
//class student extends person {
//    schools: string;
//    constructor(schools: string) {
//        super('youpeng', 20);
//        this.schools = schools;
//    }
//    tell() {
//        return this.name + '' + this.age + '' + this.schools;
//    }
//}
//
//let s = new student('顺顺学院');
//console.log(s.tell());
// 私有 公有
var person = (function () {
    function person(name, age) {
        this._name = name;
        this.age = age;
    }
    Object.defineProperty(person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    person.prototype.print = function () {
        return this._name + '' + this.age;
    };
    return person;
}());
var student = (function (_super) {
    __extends(student, _super);
    function student() {
        _super.apply(this, arguments);
    }
    student.prototype.tell = function () {
        return this.age + '' + this.name;
    };
    return student;
}(person));
var p = new student('youpeng', 30);
console.log(p.tell());
//# sourceMappingURL=app.js.map