/* eslint-disable react/prop-types */
import OptionList from './OptionList'
import './Question.css'
import QuizNum from './QuizNum'
import ScorePoint from './ScorePoint'
import Stats from './Stats'
import Footer from "./Footer";
import NextButton from "./NextButton";
import Timer from "./Timer";
import Progress from './Progress'
function Question({time, totalQuestion, questionList, dispatch, num, userAnswer, score}) {
  const answer = questionList.Answer
  return (
    <div className="question">
      <h2>React Quiz</h2>
      <div className="quizBoard">
        <Stats>
          <QuizNum num={num} totalQuestion={totalQuestion} />
          <ScorePoint score={score} />
        </Stats>
        <Progress
        <progress
          style={{ width: "100%", height: "25px" }}
          value={num + 1}
          max={totalQuestion.length}
        ></progress>
        <h4>{questionList.Question}</h4>
        <OptionList
          time={time}
          points={questionList.points}
          answer={answer}
          userAnswer={userAnswer}
          option={questionList.option}
          dispatch={dispatch}
        />
      </div>
      <Footer>
        <Timer userAnswer={userAnswer} time={time} dispatch={dispatch}/>
        {userAnswer && <NextButton time={time} userAnswer={userAnswer}  dispatch={dispatch} num={num}/>}
        {time === 0 && <NextButton time={time} userAnswer={userAnswer} dispatch={dispatch} num={num}/>}
      </Footer>
    </div>
  );
}

export default Question
