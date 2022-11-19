// Creatig a String

let a = '"my name is ":'; //same as double quotes
let b = "satty"; // same as the single quotes

let c = `my name is ${a}` //when you need expression or variables

console.log(a,b,c)

console.log(typeof a,typeof b,typeof c)

//access sitring as an array

console.log(a[3])

console.log(a.charAt(3))

//Js strings are immutable

a[3] = 'f'

console.log(a)

//you can assign a variable 

a = "Satty is my name";

console.log(a)

// JS is case-sensitive

const A = "Satty Is My Name";

console.log(a===A)

// Multiline in JS

let about = 'To use a multiline string ' + 'you can either use' + ' the +operator ' +
             'or ' + ' the \\ operator.'

console.log(about)

let abouts = 'To use a multiline string \you can either use\ the +operator \
or \ the \\ operator.'

console.log(abouts)

// String length

console.log(a.length)
console.log(b.length)
console.log(c.length)

console.log(c.charAt(28))

// string object

// constructor
// length
// prototype

let e = "Hello"

let obj_e = new String('Hello') //reference to string function that created object 

console.log(obj_e.length)

console.log(typeof obj_e)

// Note : It is recommended to avoid using string objects. Using string objects slows down the program.

// JS string method

b = "Satty";

c = `my name is ${b}`

let d = "My Name Is: ";

let g = "   Hello Everyone:    "

console.log('characted at index position :',b.charAt(0))
console.log(`adding "b" & "d": `,d.concat(b))
console.log('replacing "y" in var b with "a" ',b.replace('y','a'))
console.log('coverting string element into array :',b.split("",3)) //reuires splitter & no. of divisions
console.log(b.substr(0,3)) // returns the part of string
console.log(b.substring(0,3)) // returns the part of string
console.log('Slicing "b" :',b.slice(0,3)) // returns the part of string
console.log('changing to lower case: ',b.toLowerCase())
console.log('changing to upper case: ',b.toUpperCase())
console.log(g)
console.log(g.trim())
console.log('check prasence of "a" at "1" : ',b.includes("a",1)) //returns boolean value
console.log(b.search('x'))   //return index of match 

// Note : When + is used with strings, it performs concatenation. However, when + is used with numbers, it performs addition.
// JS string function 

const n = 29
const Num_n = String(n)  //converting to string
console.log(typeof Num_n)

// Escape character

let mod_d = "My Name Is: \"Satty\" ";
console.log(mod_d)

mod_d = "My Name Is: \\Satty\\ ";
console.log(mod_d)

mod_d = "My Name Is: \nSatty ";
console.log(mod_d)

mod_d = "My Name Is: Satty ";
console.log(mod_d)

mod_d = "My Name Is: \n\rSatty ";
console.log(mod_d)

mod_d = "My Name Is: \vSatty ";
console.log(mod_d)

mod_d = "My Name Is: \t\tSatty ";
console.log(mod_d)

mod_d = "My Name Is: S\batty ";
console.log(mod_d)

mod_d = "My Name Is:\f Satty ";
console.log(mod_d)

// reverse each string

a = "Satty is my name";

console.log(a)

const reverse_a = a.split('').reverse().join('');
console.log(reverse_a) //reverse entire word

const reverse_ea = reverse_a.split(" ").reverse().join(' ')
console.log(reverse_ea) //reverse each word


// Spread Operators

// spread an obect property into another object

const abc = [1,2,3];

const bar = [...abc]

console.log(bar)

console.log([...abc,...bar])