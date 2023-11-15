/* eslint-disable react/prop-types */

function Button({handleRes handleStart, children}) {
  return (
    <>
      <button onClick={handleStart}>{children}</button>
    </>
  );
}

export default Button
