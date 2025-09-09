1) What is the difference between var, let, and const?

Javascript including 3 type of variable
1. var
2. let
4. const
var, is a globally executed variable not any scope issue like function inside outside every space have declear var.
var before initialization allowed in any function. and redeclare any time no scope problem.

let, is block scope variable. it can scope issue. but let is redeclare allowed. It can be declared without initialization. var in one scope same name different variable do not accepted.

const is block scope variable. it cannot do not execute globally.this variable do not allow redeclare. const before initialization allowed.

2) What is the difference between map(), forEach(), and filter()?
map(), forEach(), and filter() all is array method
map return full data to calculate
filter return match all data
forEach do not return any data

4) What are arrow functions in ES6?
arrow function is a most common uses function compare to function keyword function
arrow function do not allow function keyword it simple to write
const myFunc()=>{}
but importent concept is this keyword arrow function do not have access this keyword this keyword only uses for keyword function

6) How does destructuring assignment work in ES6?
javascript most common uses of destructuring. this use to write clen code
example: const obj = {name: 'nishad', age: 21}
access: obj.name or obj.age

destructuring
const obj = {name: 'nishad', age: 21}
const {name, age} = obj
access: name or age
8) Explain template literals in ES6. How are they different from string concatenation?
another most common uses syntax is template literals this is powerful compare to simple string ""
template literals make to write string and javascript code 
example: const name = 'nishad'
const data = `my name is ${name}` // my name is nishad
