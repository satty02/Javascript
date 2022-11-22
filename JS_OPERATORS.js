// Operartors are symbols used to do operations on operands

// types of operators : ACCLABS

// ASSIGNMENT OPERATORS

var N1 = 9;
var N2 = 4;

console.log(N1+=N2)     // ==> 13
console.log(N1*=N2)     // ==> 52
console.log(N1/=N2)     // ==> 13
console.log(N1-=N2)     // ==> 9
console.log(N1%=N2)     // ==> 1
console.log(N1**N2)     // ==> 1

console.log('***************')
// PREFIX & POSTFIX
var N1 = 9;

console.log(N1++) //printed value of N1  then incremented -- 9
console.log(N1)   //---------------------------------------- 10

console.log(++N1) // incremented first then printed value -- 11
console.log(N1)   //---------------------------------------- 11

console.log(N1--) // printed value of N1  then decremented -- 11
console.log(N1)   //----------------------------------------- 10

console.log(--N1) // decremented first then printed value -- 9
console.log(N1)   //---------------------------------------- 9


console.log('***************')
// ARITHMATIC OPERATORS

// Precedence in operators   (),**,*,/,//,%,+,-

let num1 = 9;
let num2 = 4;

console.log(num1+num2); //addition               // ==> 13
console.log(num1-num2); //substraction          // ==> 5
console.log(num1*num2); //multiplication        // ==> 36
console.log(num1/num2); //division              // ==> 2.25
console.log(num1%num2); //modulus or remainder  // ==> 1
console.log(num1**num2); //power                // ==> 6561


console.log('***************')

// COMPARISION OPERATORS

// returns boolean i.e true or false

num1 = 9;
num2 = 4;

console.log(num1>num2); //num1 greater than num2
console.log(num1<num2); //num2 less than num2
console.log(num1>=num2); //num1 greater than  equals to num2
console.log(num1<=num2); //num1 less than & equals to num2
console.log(num1!=num2); //num1 not equals to num2
console.log(num1===num2); //strict equals (checks here data type) 
console.log(num1!==num2); //strict not equals (checks here data type)


console.log('***************')

//LOGICAL OPERATORS  
// The logical-AND operator ( && ) has higher precedence than the logical-OR operator ( || )

// TERNERY OPERATORS (CONDITION)? true : false

let ageOfPerson = 20;

console.log((ageOfPerson>=18)?"CAN VOTE":"CANNOT VOTE") //CAN VOTE

//  OR OPERATORS  (statement_1 || statement_2)

let citizen ='India'

console.log(ageOfPerson>=18 || citizen=='India' ? "Can_Vote" : "Cannot_Vote") //Can_Vote

// T || T = T
// T || F = T
// F || T = T
// F || F = F

//  AND OPERATORS  (statement_1 && statement_2)

console.log(ageOfPerson>=21 && citizen=='India' ? "Can_Vote" : "Cannot_Vote") //Can_Vote

// T && T = T
// T && F = F
// F && T = F
// F && F = F

console.log('***************')

// JAVSCRIPT OBJECT

const user = {
    "Name" : "Satish",
    "age" : 26,
    "country" : "India",
    "CanVote" : true
}

console.log(typeof user)            //object
console.log(typeof user.Name)       //string
console.log(typeof user.age)        //number
console.log(typeof user.CanVote)    //boolean

delete user.country  //you cannot delete entire object
console.log(user)



console.log('***************')

// BOOLEAN OPERATORS  (true  &  false)














