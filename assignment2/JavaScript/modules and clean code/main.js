"Modules :"
"String Modules :"
import {reverseString, upper , countStrings ,lower} from "./stringUtils.js";
"Math Modules :"
import{ add,multiply,subtract,divide } from "./mathutils.js";
"Array Module :"
import { removeDuplicate,getLastElement,getfirstElement,LenOfArray } from "./arrayUtils.js";

console.log("addition of two Numbers :",add(10,20));// addition of two Numbers : 30
console.log("multiplication of two Numbers :",multiply(10,20));// multiplication of two Numbers : 200
console.log("dividation of two Numbers :",divide(10,20));// dividation of two Numbers : 0.5
console.log("substraction of two Numbers :",subtract(10,20));// substraction of two Numbers : -10


"String Modules :"

console.log(reverseString("pravin"));//nivarp
console.log(upper("pravin"));//PRAVIN
console.log(countStrings("Pravin"));//6
console.log(lower("PRAVIN"));//pravin


"Array Module :"
const numbers =[1,2,4,5,56,67,8,9,99];

console.log("Array:", numbers);//[1, 2, 4, 5, 56, 67, 8, 9, 99]
console.log("Length:", LenOfArray(numbers));//Length: 9
console.log("First Element:", getfirstElement(numbers));//First Element: 1
console.log("Last Element:", getLastElement(numbers));//Last Element: 99
console.log("Without Duplicates:", removeDuplicate(numbers));//Without Duplicates:[1, 2, 4, 5, 56, 67, 8, 9, 99]