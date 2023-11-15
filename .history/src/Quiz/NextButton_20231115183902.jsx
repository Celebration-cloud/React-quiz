/**
 * The NextButton component is a button that triggers a dispatch action when clicked, and the text on
 * the button changes depending on the value of the "num" prop.
 * @returns The NextButton component is returning a div containing a button element.
 */
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
