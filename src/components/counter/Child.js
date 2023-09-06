import React, { useContext } from 'react'
import countContext from './Context'
//with context
function Child() {
    const context = useContext(countContext);
    const {countPlus,countMinus} = context;
  return (
    <div>
      <button onClick={countPlus}>+</button>
      <button onClick={countMinus}>-</button>
    </div>
  )
}

// with props
// function Child({count,countPlus,countMinus}) {
//   return (
//     <div>
//       <button onClick={countPlus}>+</button>
//       <button onClick={countMinus}>-</button>
//     </div>
//   )
// }

export default Child;
