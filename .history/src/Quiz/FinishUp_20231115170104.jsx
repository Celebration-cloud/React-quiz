/* eslint-disable react/prop-types */

function FinishUp({score, dispatch}) {
    function handleReset(){
        dispatch({type: "reset"})
    }
  return (
    <div>
      <p>finished</p>
      <p
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default FinishUp
