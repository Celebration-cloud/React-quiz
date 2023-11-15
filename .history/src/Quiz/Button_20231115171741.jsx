/* eslint-disable react/prop-types */

function Button({handleReset, handleStart, children}) {
  return (
    <>
      <button onClick={[handleResethandleStart]}>{children}</button>
    </>
  );
}

export default Button
