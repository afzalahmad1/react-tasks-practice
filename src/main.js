// for(var i=0;i<10;i++){
//     // console.log(i)
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
// } 
// //10 10 10 10 10 10 10 10 10 10

// for(let i=0;i<10;i++){
//     // console.log(i)
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
// } 
// //0 1 2 3 4 5 6 7 8 9

// function mul(x){
//     return function(y){
//         console.log(x*y)
//     }
// }
// mul(5)(6)

// let arr = [9,2,3,4,5,6,7];
// let obj = {...arr};
// console.log(obj)


// let promise = new Promise((res)=>res(2));

// promise.then((v)=>{
//     console.log(v);
//     return v*2;
// }).then((v)=>{
//     console.log(v);
//     return v*4;
// }).finally((v)=>{
//     console.log(v);
//     return 0;
// }).then((v)=>{
//     console.log(v)
// })





// const arr = [3,4,5,6];

// arr.foo = "hi";
// for(var i in  arr){
//     console.log(i)
// }

// for(let i of arr){
//     console.log(i)
// }

// const arr = [1,2,10,21,9,3,31];
// arr.sort();
// console.log(arr)

// let arr2=[...arr]
// arr2.sort((a,b)=> a-b)
// console.log(arr2)



// (function(){  var x = y = 5;})();
// console.log("x is defined? " + (typeof x !== 'undefined'));
// console.log("y is defined? " + (typeof y !== 'undefined'));

// var x = y = 5 ===>   y = 5(global)     var x = y(local)
// so y is accessible outside function 
//and x is not accessible from outside
// The output of the code is x is defined? false and y is defined? true.

// The reason for this is that the variable declaration var x = y = 5; is actually interpreted as two 
// separate statements by the JavaScript engine. The first statement is y = 5;, which assigns the value 5 to 
// the global variable y. The second statement is var x = y;, which declares a new local variable x and
//  initializes it with the current value of y. However, since y is a global variable, it can be accessed 
//  from anywhere in the code, including inside the function. Therefore, when you check if x is defined, it 
//  returns false because it is only defined inside the function scope. On the other hand, when you check if y 
//  is defined, it returns true because it is a global variable and can be accessed from anywhere in the code.




// (function(){
//     console.log(a) // undefined
//     console.log(b) // ReferenceError: b is not defined
//     var a = b = 3;
//   })();


/*
//CALL APPLY BIND

let obj1={
    name:"Afzal"
}
let obj2={
    name:"Ahmad"
}
function personName(gender){
    console.log(`Person Name is ${this.name} and gender is ${gender}`)
}
personName("male")
personName.call(obj1,"male")
personName.call(obj2,"male")
personName.apply(obj1,["male"])
personName.apply(obj2,["male"])
let fnc1 = personName.bind(obj1,"male")
fnc1()

let fnc2 = personName.bind(obj2,"male")
fnc2()
*/



/*
//MAP in js

let arr = [1 ,4,52,8,5,4,5,4,8,4,8,42,8,4,2,0,0,0,0,4,5,8,52,4,7,4,5,8,7]
let map = new Map();
arr.forEach((val)=>{
    if(map.has(val)){
       let tempVal = map.get(val)+1;
       map.set(val,tempVal)
    }else{
        map.set(val,1)
    }
})
// for(let i of map){
//     console.log("key"+i[0] + "value" + i[1]) 
// }
// console.log([...map.keys()]);
// console.log([...map.values()]);
// console.log([...map.entries()]);
// console.log(map.size);

//convert object to map
let obj = {
    name:"Afzal",
    age:26
}
let map1 = new Map(Object.entries(obj))

console.log("object",obj)
console.log("map",map1)

//convert map to object

let convertedObj = (Object.fromEntries(map1.entries()))
console.log(convertedObj)
*/

/*
//SET in js

let arr = [1 ,4,52,8,5,4,5,4,8,4,8,42,8,4,2,0,0,0,0,4,5,8,52,4,7,4,5,8,7]
let set = new Set()
arr.forEach((val)=>{
    set.add(val)
})
console.log([...set.keys()])
console.log(set.size)
set.delete(0)
console.log([...set.keys()])
*/


// polifills of map 

Array.prototype.myMap = function (callback){
    let newArr = [];
    for(let i=0;i<this.length;i++){
        newArr.push(callback(this[i],i,newArr))
    }
    return newArr
}

let arr = [2 , 3 , 5];

let ans = arr.myMap((val)=>{
    return val*2;
})
console.log(ans);

// polyfil for filter

Array.prototype.myFilter = function(callback){
    let newArr = [];
    for(let i = 0 ; i< this.length;i++){
        if(callback(this[i],i)){
            newArr.push(this[i]);
        }
    }
    return newArr
}

let arr1 = [2 , 3 , 5];

let ans1 = arr.myFilter((val)=>{
    return val>3;
})
console.log(ans1);