/* eslint-disable react/prop-types */

function Button({handleReset, handleStart, children}) {
  return (
    <>
      <button onClick={handleReset, handleStart]}>{children}</button>
    </>
  );
}

export default Button
