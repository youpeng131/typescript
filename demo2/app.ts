/**
 * Created by youpeng on 16/5/13.
 */

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

class person {
    private _name: string;
    public age: number;
    constructor(name: string, age: number) {
        this._name = name;
        this.age = age;
    }
    get name():string {
        return this._name;
    }
    set name(newName: string) {
        this._name = newName;
    }
    print() {
        return this._name + '' + this.age;
    }
}

class student extends person {
    tell() {
        return this.age + '' + this.name;
    }
}

let p = new student('youpeng', 30);
console.log(p.tell());

