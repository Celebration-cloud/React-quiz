/* eslint-disable react/prop-types */

function FinishUp({dispatch}) {
    function handleReset(){
        dispatch({type: "reset"})
    }
  return (
    <div>
      <p>finished</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default FinishUp
