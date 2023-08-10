// Basic of JavaScript

// Variable : A container that holds value, to create a variable use 'let', 'var' and 'const'
let name; // valid
let mySchoolName;   // camle case : recommended
let my_friend_name; // snake case


const fatherName = "";
// fatherName = "sdjkf";


// naming convension for variable
/*
- name must start with alpha batic character
- name must not start with special character except '_',  '$'
- name must not be a keywords
- name should be meaning full
*/


// assign value to a variable
let num;
num = 10;  // store 10 to num
// console.log(num) // 10

// Data Type : type of data
/*
1) number : 1, 3, 3.5, 0.4
2) string : '1', "234", "&&", "Bikash"
3) boolean : true, false
4) null : nothing
5) undefined : when varible is decleared but not initialized
6) symbol : discuss later
7) NaN : not a number
8) BigInt : large integer
*/


let number;
number=10;
number = true;
// console.log(typeof number)

// Operator : +,-, %, /. =, 

// 2+2 // 4
// let n =2;
// let m=3;
// n+m // 5


2==2 // true
"2" == 2 // true

// console.log("2"==2)
// console.log("true"==true)

console.log("2"===2)
// console.log("true"==true)

2<4 // true
4>3 // true
2>=5 // false

5>=5 // true
let x=2;
let xx;

xx = x++;   // x = x+1
console.log(xx)

let yy;
yy = ++x;
// console.log(yy++)
// console.log(yy)






// String : sequence of character inclosed withing quotes
let _name= "Bikash";
console.log(_name[1])
// change string to uppercase

let capName = _name.toUpperCase();
let smallName = capName.toLowerCase();
smallName.charAt(3) // a
smallName.length // 6


let rupesh = "Rupesh Yadav";
let puja = "Puja Rani";

let res = rupesh+"-"+puja;
// console.log(res)





