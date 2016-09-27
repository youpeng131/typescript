/**
 * Created by youpeng on 16/5/13.
 */

let isDone: boolean = true;
console.log(isDone);


let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0x1010;
let octal: number = 0x774;
console.log(decimal, hex, binary, octal);

let color: string = "blue";
console.log(color);

enum Color {Red = 1, Green = 2, Blue = 4};
let c: Color = Color.Green;
console.log(c);

let list: string[] = ['a', 'b', 'c'];
console.log(list);


let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure);


function tell(): string {
    return 'hello';
}
alert(tell());

function warnUser(): void {
    alert("This is my warning message");
}
warnUser();