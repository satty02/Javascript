var arr = [];

console.time("timer");

for (let i=1; i<=100000; i++){
    arr.push(i)
}
//...and stops
console.timeEnd("timer")

console.log("***********")


var arr = [];
console.time("timers");

for (let i=1; i<=100000; i++){
    arr.unshift(i)
}
//...and stops
console.timeEnd("timers")