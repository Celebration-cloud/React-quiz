import {useReducer, Fragment} from 'react'
import Main from './Main'
import Start from './Start'
import Loading from './Loading'
import Question from './Question'
import Error from './Error'
import FinishUp from './FinishUp'
import initialState from './initialState'
import reducer from './reducer'
import useFetchData from './useFetchData'

function ReactQuiz() {
  const [{ status, questionList, score, index, userAnswer, time }, dispatch] =
    useReducer(reducer, initialState);
  useFetchData(dispatch)
  return (
    <Fragment>
      <Main>
        {status === "Error occurred" && <Error status={status} />}
        {status === "loading" && <Loading />}
        {status === "ready" && <Start questionList={questionList} dispatch={dispatch} />}
        {status === "active" && ( index < 5 ?
          <Question
            totalQuestion={questionList}
            questionList={questionList[index]}
            dispatch={dispatch}
            score={score}
            userAnswer={userAnswer}
            num={index}
            time={time}
          /> : <FinishUp score={score} dispatch={dispatch}/>
        )}
      </Main>
    </Fragment>
  );
}

export default ReactQuiz
