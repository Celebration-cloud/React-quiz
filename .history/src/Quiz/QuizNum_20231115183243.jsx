/**
 * The QuizNum component displays the current question number and the total number of questions in a
 * quiz.
 * @returns The QuizNum component is returning a div element containing a paragraph element. The
 * paragraph element displays the current question number (num + 1) and the total number of questions
 * (totalQuestion.length).
 */
/* eslint-disable react/prop-types */

function QuizNum({num, totalQuestion}) {
  return (
    <div>
        <p>Question: {num + 1}/{totalQuestion.length}</p>
    </div>
  )
}

export default QuizNum
