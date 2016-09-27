/**
 * Created by youpeng on 16/5/17.
 */

// 函数-可变参数
function peolpeName(firstName: string, ...restOfName: string[]) {
    return firstName + '' + restOfName.join('-');
}

var pn = peolpeName('you', 'peng' ,'is', 'a', 'IT');

console.log(pn);


// 函数-Lambads 和 this 关键字的使用 =>
var people = {
    name: ['you', 'peng', 'is', 'a', 'IT'],
    getName: function() {
        return () => {
            let i = Math.floor(Math.random()*5);
            return {
                n: this.name[i]
            }
        }
    }

};

var myName = people.getName();
console.log(myName().n);

// 函数-重载

function attr(name: string): string;
function attr (age: number): number;

function attr(nameOrage: any): any {
    if (nameOrage && typeof nameOrage === 'string') {
        console.log('姓名');
    } else {
        console.log('年龄');
    }
}

attr('youpeng');
attr(30);