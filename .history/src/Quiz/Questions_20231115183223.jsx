/**
 * The above function is a React component that renders a question from a question list.
 * @returns The component is returning an `<h4>` element with the text content of
 * `questionList.Question`.
 */
/* eslint-disable react/prop-types */

function Questions({ questionList }) {
  return <h4>{questionList.Question}</h4>;
}

export default Questions
