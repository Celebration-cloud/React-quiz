/* eslint-disable react/prop-types */

function Button({handleReset, handleStart, children}) {
  return (
    <>
      <button onClickonClick={handleStart}>{children}</button>
    </>
  );
}

export default Button
