/**
 * The OptionList component renders a list of OptionButton components and handles user selection of
 * options.
 * @returns The `OptionList` component is being returned.
 */
/* eslint-disable react/prop-types */
import OptionButton from './OptionButton';
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
  window.title
  return (
    <ul>
      {option.map((item, idx) => (
        <OptionButton
          item={item}
          handleOption={handleOption}
          answer={answer}
          userAnswer={userAnswer}
          time={time}
          idx={idx}
          key={idx}
        >
          {item}
        </OptionButton>
      ))}
    </ul>
  );
}

export default OptionList
