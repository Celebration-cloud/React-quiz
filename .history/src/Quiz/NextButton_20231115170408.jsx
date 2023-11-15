/* eslint-disable react/prop-types */
import './Footer.css'
function NextButton({dispatch, num}) {
    function handleNext() {
        dispatch({type: "nextQuestion", payload: 120})
    }
  return (
    <div>
      <button className='next-btn' onClick={handleNext}>{num === 4 ? "Finish": "Next"}</button>
    </div>
  )
}

export default NextButton
