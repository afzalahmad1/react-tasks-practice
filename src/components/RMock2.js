//theory
// 1.try catch and finally
// 2.lazy loading
// 3.https status code
// 4.useState
// 5.useEffect
// 6.setTimeout , setInterval
// 7.prop driling and its disAdvantage and solution


//js object based question

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//     <title>Static Template</title>
//   </head>
//   <body>
//     <h3>
//       Write a program to compare two objects to determine the first object contains equivalent property values to the second object in JavaScript. <br> <br>(View the output in console)
//     </h3>
//     <br />
//     <p>
//       Sample Inputs:<br />
//       Input: obj1: { name: "John", age: 23; degree: "CS" }</br>
//       &emsp;&emsp;&ensp; obj2: {age: 23, degree: "CS"}</br>
//       Output: true (View this output in console)
//     </br>
//   </br>
// </br>
//       Input: obj1: { name: "John", degree: "CS" }</br>
//       &emsp;&emsp;&ensp;obj2: {name: "Max", age: 23, degree: "CS"}</br>
      
//       Output: false (View this output in console)

//     </p>
//     <script>
// // Define the first object
// let obj1 = {
// //Define first object
//   brand: "Tesla",
//   model: "X",
//   category: "dual-motor",
//   price: "$98490"
// }


// function check(obj1, obj2) {
// //Write your code here
// // console.log("obj1====", obj1)
// // console.log("obj2====", obj2)
// let keys1 = Object.keys(obj1);
// let keys2 = Object.Keys(obj2);
// console.log(keys1)

// //running for loop in
// for(let key in obj2){
//   // comparing values
//   if(obj1[key] !== obj2[key] ){
//     return false
//   }

// }
// return true;

// }

// // Call the function
// console.log(check(obj1, {brand: "Tesla"})); // True
// // console.log(check(obj1, {model: "X"})); // True
// // console.log(check(obj1, {brand: "Mercedes"})); // False
// // console.log(check(obj1, {cost: "$98490"})); // False
// // console.log(check(obj1, {category: "dual-motor", price: "$98490"})); // True
// // console.log(check(obj1, {category: "dual-motor", cost: "$98490"})); // False
//     </script>
//   </body>
// </html>

// Write a program to compare two objects to determine the first 
// object contains equivalent property values to the second object 
// in JavaScript.







//React Base
// import "./styles.css";
// import React, { useState } from "react";

// function App() {
//   const [countdown, setCountdown] = useState(10);
//   const [message, setmessage] = useState("");

//   const handleStartButtonClick = () => { 
//     // TODO: Start the countdown
//     let count = 10;
//     let time = setInterval(() => {
//       count--;
//       setCountdown((prev) => prev - 1);
//       if (count === 0) {
//         setmessage("Time's up");
//         clearInterval(time);
//       }
//     }, 1000);
//   };

//   return (
//     <div>
//       <h1>Countdown: {countdown}</h1>
//       <button onClick={handleStartButtonClick}>Start</button>
//       {message && <p style={{ color: "red" }}>{message}</p>}
//     </div>
//   );
// }

// export default App;

// Create a simple React application that
// displays a countdown timer that starts
// at 10 seconds and decrements by one second
// each second until it reaches zero. When
// the countdown reaches zero, the application
//  should display a message that says
//  "Time's up!".
