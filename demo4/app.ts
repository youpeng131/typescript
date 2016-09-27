/**
 * Created by youpeng on 16/5/18.
 */

// 接口(Interfaces) ? 接口-可选属性

interface LabelValue{
    label?: string;
    age?: number
}

function printLabel(labelObj: LabelValue) {
    console.log(labelObj.label + labelObj.age);
}

let obj = {label: 'Hello', age: 25};
printLabel(obj);


//  接口-函数类型


interface Func{
    (res: string, sub: string):boolean
}

let search : Func;
search = function(res: string, sub: string) {
    var result = res.search(sub);
    if (result != -1) {
        return true;
    } else {
        return false;
    }
};


//  接口-数组类型

interface stringArr{
    [index: number]: string;

}
let Arr : stringArr;
Arr = ['you', 'peng'];

console.log(Arr);


// 接口- Class 类型

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime : Date;
    setTime(d: Date){
        this.currentTime = d;
    }
}

// 接口-接口继承与混合类型

interface Shape{
    color : string;
}
interface PenStroke {
    penWidth: string;
 }

interface Square extends Shape, PenStroke {
    slideLength: number;
}

var s = <Square>{};
s.color = 'red';
s.penWidth = '100';
s.slideLength = 2;

console.log(s);