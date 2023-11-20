/**
 * The function exports a React component called QuestionList that renders a div with the class name
 * "question" and displays its children.
 * @returns The `QuestionList` component is returning a `div` element with the class name "question"
 * and the `children` prop as its content.
 */
/* eslint-disable react/prop-types */
import "./Question.css";
function QuestionList({fin, children}) {
  return <div style={{height: {`${fin}px`}}} className="question">{children}</div>;
}

export default QuestionList
