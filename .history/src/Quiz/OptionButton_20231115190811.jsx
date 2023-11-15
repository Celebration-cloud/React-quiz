/**
 * The `OptionButton` component is a button that handles user interaction and displays different styles
 * based on the user's answer and the correct answer.
 * @returns The `OptionButton` component is being returned.
 */
/* eslint-disable react/prop-types */

function OptionButton({handleOption, item, , time, answer, userAnswer, children }) {
  return (
    <button
      style={
        userAnswer === item
          ? { marginLeft: "30px", width: "90%", borderRadius: "30px" }
          : { width: "90%", borderRadius: "30px", textAlign: "left" }
      }
      disabled={userAnswer || time === 0}
      onClick={(e) => handleOption(e, )}
      value={item}
      className={
        !userAnswer && time > 0 ? "li" : answer ===  ? "right" : "wrong"
      }
    >
      {children}
    </button>
  );
}

export default OptionButton
