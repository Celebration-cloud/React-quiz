import {useReducer, useEffect, Fragment} from 'react'
import Main from './Main'
import Start from './Start'
import Loading from './Loading'
import Question from './Question'
import Error from './Error'
import FinishUp from './FinishUp'
import initialState from './initialState'
import reducer from './reducer'

function ReactQuiz() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {status, questionList, score, index, userAnswer, time} = state
  
  useEffect(() => {
    async function list() {
      try {
        const data = await fetch(
          "https://react-quiz-api-zez9.onrender.com/Quiz",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        );
        if(!data.ok) throw new Error("Something went wrong")
        const res = await data.json()
        dispatch({type: "questionList", payload: res})
        
      } catch (error) {
        dispatch({type: "error"})
      }
    }
    list()

  }, [])
  
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
          /> : <FinishUp dispatch={dispatch}/>
        )}
      </Main>
    </Fragment>
  );
}

export default ReactQuiz
