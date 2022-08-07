//  1. Console API
console.log("hello world");

//  2. JS Variables
var num1 = 10;
var num2 = 12;

//console.log(num1 + num2);

var str1 = "this is string";
//console.log(str1);

//objects
var marks = {
  ravi: 50,
  shubham: 60,
  harry: 70,
};

//console.log(marks);

var arr = [1, 2, 3, 4, 5];

// function avg(a, b) {
//   c = (a + b) / 2;
//   return c;
// }

// c1 = avg(4, 6);
// c2 = avg(14, 16);

// arr.forEach(function (element) {
//   console.log(element);
// });


let j = 0;
while(j < arr.length){
    //console.log(arr[j]);
    j++;
}

let myArr = ["Fan", 34, null, true];
// console.log(myArr.length);

// console.log(myArr.toString());

//String methods

let myStr = "harry is teaching";

// console.log(myStr.length);
// console.log(myStr.indexOf("is"));

myDate = new Date();
console.log(myDate.getHours());

//  DOM Manipulation
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass);
elemClass[0].style.background = "yellow";