// Creating a basic counter with a button that increments the displayed value by 1 is a simple task. But with 
// some added conditions, the same task can become tough. 

// Suppose, we have a component, which contains a state variable (declared using the useState React hook) that 
// tracks the value for the counter. The value is also displayed in this component, but the button that 
// increments the value is present in the child component of this component. 

// First, the interviewer expects you to find the possible ways to solve this problem. It can be solved using 
// one of the following ways.

// Using global state created with Redux  
// Using render props.
// Using React context

// The redux way is too complex for such a challenge. But mentioning the global state in front of the 
// interviewer shows your awareness.

// Using render props is the easier way but only an experienced developer will be aware of the “render props” 
// technique. 

// The function to update the “count” is passed as props to the child component and then, it is used there. 
//  But, the third way is the best and it will impress the interviewer the most because it uses Context. 

// Context is one of the best features of React and every experienced React developer is expected to know React 
// Context. 
import { useState } from 'react'
import countContext from './Context'
import Child from './Child'

function Counter() {

    const [count,setCount] = useState(0)
    function countPlus(){
        setCount(count+1)
    }
    function countMinus(){
        setCount(count-1)
    }
  return (
    //with context
    <div>
      <p>counter with context api</p>
      <countContext.Provider value={{count,countPlus,countMinus}}>
        <Child />
        <h1>{count}</h1>
      </countContext.Provider>
    </div>


  )
}

export default Counter

    // // with props
    // <div>
    //     <Child  count={count} countPlus={countPlus} countMinus={countMinus}/>
    //     <hi>{count}</hi>
    // </div>