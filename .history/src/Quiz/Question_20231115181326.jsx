/**
 * A React functional component that renders a quiz question with options, a timer, and a progress bar.
 *
 * @param {number} time - The remaining time for the question in seconds.
 * @param {array} totalQuestion - An array of all the quiz questions.
 * @param {object} questionList - The current question object.
 * @param {function} dispatch - A function to dispatch actions to update the state.
 * @param {number} num - The current question number.
 * @param {string} userAnswer - The user's selected answer for the current question.
 * @param {number} score - The user's current score.
 * @returns {JSX.Element} - The rendered question component with the question text, options, timer, progress bar, and next button.
 */
function Question({
  time,
  totalQuestion,
  questionList,
  dispatch,
  num,
  userAnswer,
  score,
}) {
  const answer = questionList.Answer;
  return (
    <QuestionList>
      <QuestionHead />
      <QuizBoard>
        <Stats>
          <QuizNum num={num} totalQuestion={totalQuestion} />
          <ScorePoint score={score} />
        </Stats>
        <Progress num={num} totalQuestion={totalQuestion} />
        <Questions questionList={questionList} />
        <OptionList
          time={time}
          points={questionList.points}
          answer={answer}
          userAnswer={userAnswer}
          option={questionList.option}
          dispatch={dispatch}
        />
      </QuizBoard>
      <Footer>
        <Timer userAnswer={userAnswer} time={time} dispatch={dispatch} />
        {userAnswer && (
          <NextButton
            time={time}
            userAnswer={userAnswer}
            dispatch={dispatch}
            num={num}
          />
        )}
        {time === 0 && (
          <NextButton
            time={time}
            userAnswer={userAnswer}
            dispatch={dispatch}
            num={num}
          />
        )}
      </Footer>
    </QuestionList>
  );
}

export default Question;
