import React from 'react'

function OptionButton({handleOption, item, idx, time, answer, userAnswer, children }) {
  return (
    <button
      style={
        userAnswer === item
          ? { marginLeft: "30px", width: "90%", borderRadius: "30px" }
          : { width: "90%", borderRadius: "30px", textAlign: "left" }
      }
      disabled={userAnswer || time === 0}
      onClick={(e) => handleOption(e, idx)}
      key={idx}
      value={item}
      className={
        !userAnswer && time > 0 ? "li" : answer === idx ? "right" : "wrong"
      }
    >
      {children}
    </button>
  );
}

export default OptionButton
