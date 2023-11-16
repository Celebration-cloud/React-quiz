/**
 * The Start component is a simple quiz application built with React.js that displays a card with a
 * heading, paragraph, and a button to start the quiz.
 * @returns The Start component is returning JSX code, which represents the structure and content of
 * the component's rendered output.
 */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Start.css'
function Start({questionList, dispatch}) {
  const [answer, setAnswer] = useState([])
    function handleStart() {
      dispatch({ type: "begin" });
      questionList.map((item) =>
        setAnswer(prev => [...prev, item.Answer]),
      dispatch({ type: "ans", payload: answer })
      );
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
        <button className="btn" onClick={handleStart}>
          Start Quiz!
        </button>
      </div>
    </div>
  );
}

export default Start
