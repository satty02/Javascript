// Creatig a String

let a = '"my name is ":'; //same as double quotes
let b = "satty"; // same as the single quotes

let c = `my name is ${a}` //when you need expression or variables (template string)(ES6)

console.log(a,b,c)   // ==> "my name is ": satty my name is "my name is ":

console.log(typeof a,typeof b,typeof c) // ==> string string string

console.log('***************')

//access sitring as an array

console.log(a[2]) // ==> y

console.log(a.charAt(2)) // ==> y

console.log(a[-1]) // ==> undefined

console.log('***************')

//Js strings are immutable

a[3] = 'f'

console.log(a)  // ==> "my name is ":

//you can assign a variable  OR CAN change the entire string

a = "Satty is my name";

console.log(a) // ==> Satty is my name

console.log('***************')

// JS is case-sensitive

const A = "Satty Is My Name";

console.log(a===A) // ==> false

console.log('***************')

// Multiline in JS

let about = 'To use a multiline string ' + 'you can either use' + ' the +operator ' +
             'or ' + ' the \\ operator.'

console.log(about)

let abouts = 'To use a multiline string \you can either use\ the +operator \
or \ the \\ operator.'

console.log(abouts)

console.log('***************')

// String length

console.log(a.length)  // ==> 16
console.log(b.length)  // ==> 5
console.log(c.length)  // == 25

console.log(c.charAt(28))

console.log('***************')

// string object

// constructor
// length
// prototype

let e = "Hello"

let obj_e = new String('Hello') //reference to string function that created object 

console.log(obj_e.length)  // ==> 5

console.log(typeof obj_e)  // ==> object

// Note : It is recommended to avoid using string objects. Using string objects slows down the program.

console.log('***************')

// JS string method

b = "Satty";

c = `my name is ${b}`

let d = "My Name Is: ";

let g = "   Hello Everyone:    "

console.log('characted at index position :',b.charAt(0))   // ==> S
console.log(`adding "b" & "d": `,d.concat(b))              // ==> My Name Is: Satty
console.log('replacing "y" in var b with "a" ',b.replace('y','a'))   // ==> Satta
console.log('coverting string element into array :',b.split("",3)) //requires splitter & no. of divisions  //==> [ 'S', 'a', 't' ]
console.log(b.substr(0,3)) // returns the part of string        // ==> Sat
console.log(b.substring(0,3)) // returns the part of string     // ==> Sat
console.log('Slicing "b" :',b.slice(0,3)) // returns the part of string  // ==> Sat
console.log('changing to lower case: ',b.toLowerCase())    // ==> satty
console.log('changing to upper case: ',b.toUpperCase())     // ==> SATTY
console.log(g)             // ==>    Hello Everyone:  
console.log(g.trim())      // ==>Hello Everyone:  
console.log('check prasence of "a" at "1" : ',b.includes("a",1)) //returns boolean value  // ==> true
console.log(b.search('x'))   //return index of match   // ==> -1

// Splice is an array function
// Note : When + is used with strings, it performs concatenation. However, when + is used with numbers, it performs addition.
// JS string function 

const n = 29
const Num_n = String(n)  //converting to string
console.log(typeof Num_n)     // ==> string

console.log('***************')

// Escape character

let mod_d = "My Name Is: \"Satty\" ";   
console.log(mod_d)                          // ==>My Name Is: "Satty" 

mod_d = "My Name Is: \\Satty\\ ";
console.log(mod_d)                          // ==>My Name Is: \Satty\ 

mod_d = "My Name Is: \nSatty ";
console.log(mod_d)                          // ==>My Name Is: 
                                            //    Satty 

mod_d = "My Name Is: Satty ";
console.log(mod_d)                          // ==>My Name Is: Satty 

mod_d = "My Name Is: \n\rSatty ";
console.log(mod_d)                          // ==>My Name Is: 

                                            //    Satty 

mod_d = "My Name Is: \vSatty ";
console.log(mod_d)                          // ==> My Name Is: Satty

mod_d = "My Name Is: \t\tSatty ";
console.log(mod_d)                          // ==>My Name Is: 		Satty 

mod_d = "My Name Is: S\batty ";
console.log(mod_d)                          // ==>My Name Is: Satty 

mod_d = "My Name Is:\f Satty ";
console.log(mod_d)                          // ==>My Name Is: Satty

console.log('***************')

// reverse each string

a = "Satty is my name";

console.log(a)   // ==> Satty is my name

const reverse_a = a.split('').reverse().join('');
console.log(reverse_a) //reverse entire word    // ==> eman ym si yttaS

const reverse_ea = reverse_a.split(" ").reverse().join(' ')
console.log(reverse_ea) //reverse each word    // ==> yttaS si ym eman

console.log('***************')

// Spread Operators

// spread an obect property into another object

const abc = [1,2,3];

const bar = [...abc]

console.log(bar)    // ==> [ 1, 2, 3 ]

console.log([...abc,...bar])   // ==> [ 1, 2, 3, 1, 2, 3 ]

console.log('***************')

let Nm = "saTisH"  //to make first letter Capitol and subsequent letters in small

console.log(`${Nm[0].toUpperCase()}${Nm.slice(1).toLowerCase()}`)  // ==> Satish