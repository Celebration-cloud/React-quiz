/* eslint-disable react/prop-types */
import './OptionList.css'
function OptionList({time, answer, option, dispatch, userAnswer, points}) {
  function handleOption(e, opt) {
    const { value } = e.target;
    dispatch({ type: "userOption", payload: value });
    dispatch({type: "answer", payload: answer})
    let correct;
    answer === opt ? correct = points : correct = 0,
    dispatch({type: "score", payload: correct})
  }
  
  
  return (
    <ul>
      {option.map((item, idx) => (
        <OptionList item={item} handleOption={handleOption} answer={answer} userAnswer={userAnswer} time={time} idx={} key={idx}> </OptionList>
        // <button
        //   style={
        //     userAnswer === item
        //       ? {marginLeft: "30px", width: "90%", borderRadius: "30px" }
        //       : { width: "90%", borderRadius: "30px", textAlign: "left" }
        //   }
        //   disabled={userAnswer || time === 0}
        //   onClick={(e) => handleOption(e, idx)}
        //   key={idx}
        //   value={item}
        //   className={
        //     !userAnswer && time > 0
        //       ? "li"
        //       :  answer === idx
        //       ? "right"
        //       : "wrong"
        //   }
        // >
        //   {item}
        // </button>
      ))}
    </ul>
  );
}

export default OptionList
