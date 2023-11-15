/**
 * The QuizBoard component is a React component that renders a div with the className "quizBoard" and
 * displays its children.
 * @returns The QuizBoard component is being returned.
 */
/* eslint-disable react/prop-types */
import "./Question.css";

function QuizBoard({children}) {
  return <div className="quizBoard">{children}</div>;
}

export default QuizBoard
