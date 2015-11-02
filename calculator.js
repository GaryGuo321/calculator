function calculator(num1, num2, opreator) {
	switch (opreator) {
		case "加":
			return num1 + num2;
			break;
		case "减":
			return num1 - num2;
			break;
		case "乘":
			return num1 * num2;
			break;
		case "除":
			return num1 / num2;
			break;
			default:
			return xval;
	}
}

var val = ""; //放置输入的值
var xval = 0; //保存转换Number类型的值
var temp = 0; //保存第一次输入的值    
var oper = ""; //保存输入的操作符


function number(e) {
	var i = e;
	var a = i.toString();
	val += a;
	xval = parseFloat(val);
	console.log(xval);
	document.getElementById("calscreen").innerHTML=xval;
} //取值
function operation(f) {
	oper = f;
	if (f == "加" || f == "减" || f == "乘" || f == "除") {
		temp = xval;
		console.log(temp);
		xval = 0;
		val = "";
		document.getElementById("calscreen").innerHTML=temp;
	}
} //取运算符
function result(g) {
	if (g == "=") {
		var value = calculator(temp, xval, oper);
		val = "";
		xval = 0;
		temp = 0;
		oper = "";
		console.log(value);
		document.getElementById("calscreen").innerHTML=value;
	}
} //计算结果

function zero(h) {
	if (h == "c") {
		val = "";
		xval = 0;
		temp = 0;
		oper = "";
		document.getElementById("calscreen").innerHTML=xval;
	}
}