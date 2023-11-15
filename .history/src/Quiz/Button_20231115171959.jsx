/* eslint-disable react/prop-types */

function Button({handleReset, handleStart, children}) {
  return (
    <>
      <button onC onClick={handleStart}>{children}</button>
    </>
  );
}

export default Button
