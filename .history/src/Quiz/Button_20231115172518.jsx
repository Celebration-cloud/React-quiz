/* eslint-disable react/prop-types */

function Button({handleReset, handleStart, children}) {
  return (
    <>
      <button onCliconClick={handleStart}>{children}</button>
    </>
  );
}

export default Button
