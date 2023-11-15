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
      <Button handleReset={handleReset}>Reset</Button>
      <button >Rese</button>
    </div>
  )
}

export default FinishUp
