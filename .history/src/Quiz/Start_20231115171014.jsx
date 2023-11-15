/* eslint-disable react/prop-types */
import Button from './Button';
import './Start.css'
function Start({dispatch}) {
    function handleStart() {
      dispatch({ type: "begin" });
    }
  return (
    <div className="card">
      <div className="content">
        <p className="heading">The React Quiz</p>
        <p className="para">
          This is a simple quiz application built with React.js.
          <br />
          You can answer the questions and see your score at the end of each
          question set.
        </p>
        <Button>Sta</Button>
        <button className="btn" onClick={handleStart}>
          Start Quiz!
        </button>
      </div>
    </div>
  );
}

export default Start
