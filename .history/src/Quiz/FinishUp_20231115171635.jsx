/* eslint-disable react/prop-types */

import Button from "./Button"

function FinishUp({score, dispatch}) {
    function handleReset(){
        dispatch({type: "reset"})
    }
  return (
    <div>
      <p>finished</p>
      <p>you scored: {score}</p>
      <Button ha={handleReset}>Reset</Button>
      <button >Reset</button>
    </div>
  )
}

export default FinishUp
