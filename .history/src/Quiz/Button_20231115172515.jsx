/* eslint-disable react/prop-types */

function Button({handleReset, handleStart, children}) {
  return (
    <>
      <button ononClick={handleStart}>{children}</button>
    </>
  );
}

export default Button
