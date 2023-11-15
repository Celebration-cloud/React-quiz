/* eslint-disable react/prop-types */

function Button({handleReset, handleStart, children}) {
  return (
    <>
      <button onClick={handleStart, handleReset}>{children}</button>
    </>
  );
}

export default Button
