/**
 * The `FinishUp` component displays the user's score and a reset button, and dispatches a reset action
 * when the button is clicked.
 * @returns The `FinishUp` component is returning a JSX element, which is a div containing some text
 * and a button. The text includes the score prop passed to the component, and the button has an
 * onClick event handler that calls the handleReset function.
 */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
function FinishUp({score, dispatch}) {
    function handleReset(){
        dispatch({type: "reset"})
        
    }
    useEffect(() => {
      document.title = `React Quiz || Fin`;
      return () => {
        document.title = `React Quiz`;
      };
    }, [num]);
  return (
    <div>
      <p>finished</p>
      <p>you scored: {score}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default FinishUp
