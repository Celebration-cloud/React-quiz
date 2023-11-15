/* eslint-disable react/prop-types */

function Button({handleReset, handleStart, children}) {
  return (
    <>
      <button onClick={handleReset} onClick={handleStart}>{children}</button>
    </>
  );
}

export default Button
