一.类型


复合条件判断null

!a && typeof a ===‘object’



undefined, undeclared

安全防范机制

typeof DEBUG !== “undefined”;

window.DEBUG




dependency injection 依赖注入 设计模式



二.值

使用delete运算符可以将单元从数组中删除，但是数组的length属性并不会发生改变。

数组 ／ 类数组
Array.prototype.slice.call(arguments);
Array.from(…)

字符串
数组有字符串没有的可变更成员函数reverse()
先将字符串转变成数组，待处理完后再将结果转换回字符串

var c = a//将a的值转换为字符数组
.split(“”)
//将数组中的字符进行倒转
.reverse()
//将数组中的字符拼接回字符串
.join(“”);

该方法对于包含复杂字符（Unicode，如星号，多子节字符）的字符串并不适用。
https://github.com/mathiasbynens/esrever

数字

对于.运算符 它是一个有效的数字字符，会被优先识别为数字常量的一部分，然后才是对象属性访问运算符

42.toFixed(‘3’);//SyntaxError

(42).toFixed(‘3’);
0.42.toFixed(‘3’);
42..toFixed(‘3’);
42 .toFixed(‘3’);


0.1 + 0.2 == 0.3问题
设置一个误差范围值，通常称为“机器精读” js来说 2^-52

从es6开始，Number.EPSILON 

if(!Number.EPSILON){
	Number.EPSILON = Math.pow(2,-52);
}
function numbersCloseEnoughToEqual(n1,n2){
	return Math.abs(n1-n2) < Number.EPSILON;
}


Number.MAX_VALUE   number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER

整数检测
es6 Number.isInteger
if(!Number.isInteger){
	Number.isInteger = function(num){
		return typeof num == “number” && num%1 ==0;
	}
}
32位的问题

//Math.floor(obj) === obj
//return parseInt(obj, 10) === obj
//return (obj | 0) === obj


///////////////

void

function doSomething(){
	if(!APP.ready){
		return void setTimeout(doSomething,100);
		//等同于
		//setTimeout(doSomething,100);
		//return;
	}
	var result;
	return result;
}

if(doSomething()){
	//立即执行下一个任务
}

//////////////
Number.isNaN()

if(!Number.isNaN){
	Number.isNaN = function(n){
		return {
			typeof n === "number" && window.isNaN(n)
		}
	}
}

//////特殊等式
Object.is()//判断两个值是否绝对相等


if(!Object.is){
	Object.is = function(v1,v2){
		if(v1 ===0 && v2 ===0){//判断是否是-0
			return 1/ v1 === 1/ v2;
		}
		//判断是否是NAN
		if(v1 !== v1){
			return v2 !== v2;
		}
		return v1 === v2;
	}
}































