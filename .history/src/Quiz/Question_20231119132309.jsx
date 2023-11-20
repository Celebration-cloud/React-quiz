/* The code is defining a React component called `Question`. It takes several props (`time`,
`totalQuestion`, `questionList`, `dispatch`, `num`, `userAnswer`, `score`) and renders a series of
components and elements based on those props. The component structure includes `QuestionList`,
`QuestionHead`, `QuizBoard`, `Stats`, `QuizNum`, `ScorePoint`, `Progress`, `Questions`,
`OptionList`, `Footer`, `Timer`, and `NextButton`. The component is then exported as the default
export of the module. */
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
import QuizBoard from './QuizBoard'
import Questions from './Questions'
import QuestionHead from './QuestionHead'
import QuestionList from "./QuestionList"
import { useEffect } from 'react'

function Question({time, totalQuestion, questionList, dispatch, num, userAnswer, score}) {
  const answer = questionList.Answer
  useEffect(() => {
    document.title = `React Quiz || Question ${num + 1}`
    return () => {
    document.title = `React Quiz`;
    }
  }, [num])
  const [fin, setFin] = useState(window.innerHeight)
  useEffect(function(){
    const size = window.innerHeight
    function resize(){
      const wdocument.addEventListener('resize', size)
    }
    resize()
    return ()=> {
      window.removeEventListener("resize", resize)
    }
  }, [])
  
  return (
    <QuestionList>
      <QuestionHead />
      <>
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
      </>
      
    </QuestionList>
  );
}

export default Question