/*
Introduction to Arrays
Array Properties
Array Operations
Inbuilt Array Functions
Array Methods
*/

// why array (in sum problem) 
// garbage value ? 


let arr1 = ["Hello", "World"];  // created using litrals

const arr2 = new Array("Hello", "World","Hi");  // created using litrals

const arr10 = new Array(3) //3 takes as length
console.log(arr10) 

console.log(Array.isArray(arr1)) //check if it is an array
console.log(arr1) // ==> [ 'Hello', 'World' ]
console.log(arr2)   // ==> [ 'Hello', 'World' ]

console.log(typeof arr1)    // ==> object
console.log(typeof arr2)    // ==> object

// Note: It is recommended to use array literal to create an array.

// array with mixed data types

const mixedArray = ["satty",29 , true]

console.log(mixedArray)

// You can also store arrays, functions and other objects inside an array.

const arrayWithObj = [
    {"name":"satish"},
    ["satty",29 , true],
    function Hello(){
        console.log("Hello")
    }
]

console.log(arrayWithObj)

// Access Element of an array

const myArray = ['my','name','is','satty'];

console.log(myArray[0]);  //1st element
console.log(myArray[1]);  //2nd element
console.log(myArray[2]);  //3rd element

myArray.push("*")
console.log(myArray) // added element at the end of an array & returned length of array

myArray.unshift("#")
console.log(myArray) // added at the begining of an array //it takes more time to run because Js has to shift every elment by 1 to make space at start

myArray.pop()
console.log(myArray) // removing element at the end of an array // return value will be removed item

myArray.shift()
console.log(myArray) // removing at the begining of an array

myArray[3] = "satish"
console.log(myArray)  // ==> [ 'my', 'name', 'is', 'satish' ]

myArray[5] = 26
console.log(myArray)  // ==> [ 'my', 'name', 'is', 'satish', <1 empty item>, 26 ]

console.log(myArray[4])  // ==> undefined

console.log(myArray.length)  // returns length of an array   // ==> 6

console.log('***************')

// myArray = [ 'my', 'name', 'is', 'satish', <1 empty item>, 26 ]
arr1 = ["Hello", "World"];
const arr3 = [18,16,29,13,63,22,19]

// What functions are doing
//  What does it return
//  Does it change the original array


console.log(myArray.concat(arr1))  //if arr1 declared using const it throws an error //TypeError: Assignment to constant variable.//it return new array
console.log(myArray)  // ==> [ 'my', 'name', 'is', 'satish', <1 empty item>, 26 ]
console.log(arr1)

console.log(arr1.indexOf("a",2))  // if not there returns -1 //it is case sensitive //2nd param is that its starts from there

console.log(arr3.includes(29))  // returns true or false //2nd param is that its starts from there

console.log(arr3.slice(3,6))  //6th index is not included //it returns new array // orignal array is not affected   
console.log(arr3)

console.log(arr3.splice(3,6))  //6th index is  included  changes the original array //it returns removed item
console.log(arr3)              //1 - start , 2- no of items to be removed, 3 - items to be added


// filter an array

const adults = arr3.filter(checkAdult);  //it returned new array // it didnt modify original
function checkAdult(age){
    return age>=18;
}

console.log(adults)

// Below are higher order function

// find() in array

console.log(arr3.find((ele)=>{
    return ele > 20;
    }
))    // return the element ehich passes the first condition
        // returns undefined when condition is not satisfied

const twentyNine = ele => ele > 25

console.log(arr3.findIndex(twentyNine)) // returned the index of element which satisfied the condition
                                        // returns -1 when condition does not matches

const arr3Doubles = arr3.map(ele =>{
    return ele*2
})
console.log(arr3Doubles)      // it returns modified array but didnt change original array

console.log(arr3.sort((a,b)=>{return a-b})) //it changes the original array

arr3.forEach((ele,index)=>{
    console.log(ele,index)
})                                    //doesnt return any data

console.log('***************')
// arrays are objects, the array elements are stored by reference. Hence, when an array value is copied, any change in the copied array will also reflect in the original array.

let arr4 = [1,2,3,4]

arr5=arr4;
arr5[1] = 10

console.log(arr5)
console.log(arr4)

// to store value by passing named key

arr6 = ['h','e']
arr6.name = "Random"

console.log(arr6)
console.log(arr6.name)
console.log(arr6['name'])

// it is not recommended to store values by passing arbitrary names in an array.
// Hence in JavaScript, you should use an array if values are in an ordered collection. Otherwise, it's better to use object with { }.

console.log('***************')

let multArray = [arr2,arr3,arr4,arr6]

console.log(multArray)
console.log(multArray[0])
console.log(multArray[0][1])

multArray[3].push(arr1)

console.log(multArray)

multArray.splice(1,0,["satty",26])

console.log(multArray)

multArray[4].pop()
console.log(multArray)

multArray[3].splice(1,2)
console.log(multArray) 

console.log('***************')

// Iterating over Multidimensional Array

multArray.pop()
multArray.pop()
multArray.pop()


console.log(multArray)

// USING forEach() function

multArray.forEach((nm)=>{
    nm.forEach((ele)=>{
        console.log(ele)
    })
})

// USING FOR OF LOOP
for(let i of multArray){
    for(let j of i){
        console.log(j)
    }
}


for (let i=0; i<multArray.length; i++){
    for(let j=0; j<multArray[i].length; j++){
        console.log(multArray[i][j])
    }
}

// reduce 

let arr7 = [1,2,3,4];

let arr8 = arr7.reduce((acc) =>{
    acc + 1
    return acc
})

console.log(arr8)
console.log(arr7)