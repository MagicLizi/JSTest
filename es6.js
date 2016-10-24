/**
 * Created by MagicLizi on 2016/10/24.
 * es6 的一些测试
 */

//1 默认参数
var paramTest = function(p1 = 1,p2 = 2)
{
    return p1 + p2;
}

console.log(paramTest());


//2 模版对象
var p1 = "123";
var p2 = "456"

var str = `this is ${p1} ${p2}`;
console.log(str);


//3 多行字符
var mutableStr = `1234
56789`
console.log(mutableStr);

//4 解构
var data =
{
    a :1,
    b:2,
}

var {a,b} = data;
console.log("a:"+a);
console.log("b:"+b);

//5 箭头函数
var logUppercase = function()
{
    this.string = "TEST".toLowerCase();
    var _this = this;
    return function()
    {
        console.log(_this.string);
    }()
}

logUppercase();

var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9'];
var messages = ids.map(value => `ID is ${value}`);
console.log(messages);


var t = a => console.log(a);

t(1);


//6 let 块作用域
function calculateTotalAmount (vip) {
    var amount = 0; // probably should also be let, but you can mix var and let
    if (vip) {
        let amount = 1; // first amount is still 0
        console.log(amount);
    }
    { // more crazy blocks!
        let amount = 100; // first amount is still 0
        {
            let amount = 1000; // first amount is still 0
        }
    }
    return amount;
}

console.log(calculateTotalAmount(true));

function calculateTotalAmount (vip) {
    const amount = 0;
    if (vip) {
        const amount = 1;
    }
    { // more crazy blocks!
        const amount = 100 ;
        {
            const amount = 1000;
        }
    }
    return amount;
}
console.log(calculateTotalAmount(true));


//7 类
class baseModel{
    // 构造
      constructor(data) {
        this.data = data;
      }
    getData(){
        console.log(this.data);
    }
}

class child extends baseModel{
    // 构造
      constructor(data) {
        super(data);
      }
}

var bm = new baseModel(123);
bm.getData();

var c = new child(123);
c.getData();

//8 导出
var BaseModel = require('./base.js');

var b = new BaseModel(4656);
b.getName();


