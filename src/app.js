import './styles/main.scss';


import _ from 'lodash'; //ES6 import to check our babel loader

const array = [1];
const other = _.concat(array, 2, [3], [[4]]);

// console.log(other); //[1, 2, 3, [4]]

// teste 1:

// var user = {

//   name: 'joao',
//   getName: function() { return this.name;}

// }

// function  Customer(userData) {
//   return {
//     getName: function() {
//       retur: user.getName();
//     }
//   }
// } 

// var purchase = new Customer(user);
// console.log(purchase.name);
// console.log(purchase.getName()); 


// var user = {

//   name: 'joao',
//   getName: function() { return this.name;}

// }

// function  Customer(userData) {
//   return {
//     getName: function() {
//       retur: user.getName();
//     }
//   }
// } 

// var purchase = new Customer(user);
// console.log(purchase.name);
// console.log(purchase.getName()); 

// console.log(Math.round(7.25))

// let filtered = [12,22,54,1,57,,11,8,34,89].filter (it => it <= 30); 
// let sorted = Array.from(filtered).sort((a,b) => a-b);
// console.log(filtered, sorted) 

// var counter =[];
// [10,20,30,40,50].forEach(function(it){
//   counter.push(it+5);
// })
// ;
// console.log(counter);

var transform = it => parseInt(it).toString();
var numbers = [11,23,45.3,55,98,367];
var result = numbers.map(transform);

console.log(numbers, result);