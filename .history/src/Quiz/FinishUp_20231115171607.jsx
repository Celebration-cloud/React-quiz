/* eslint-disable react/prop-types */

function FinishUp({score, dispatch}) {
    function handleReset(){
        dispatch({type: "reset"})
    }
  return (
    <div>
      <p>finished</p>
      <p>you scored: {score}</p>
      <Bu
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default FinishUp
