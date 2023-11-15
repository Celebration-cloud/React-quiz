/* eslint-disable react/prop-types */

function OptionButton({handleOption, item, key, time, answer, userAnswer, children }) {
  return (
    <button
      style={
        userAnswer === item
          ? { marginLeft: "30px", width: "90%", borderRadius: "30px" }
          : { width: "90%", borderRadius: "30px", textAlign: "left" }
      }
      disabled={userAnswer || time === 0}
      onClick={(e) => handleOption(e, key)}
      value={item}
      className={
        !userAnswer && time > 0 ? "li" : answer === key ? "right" : "wrong"
      }
    >
      {children}
    </button>
  );
}

export default OptionButton
