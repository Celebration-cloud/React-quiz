/* eslint-disable react/prop-types */

function Button({handleStart, children}) {
  return (
    <>
      <button on onClick={handleStart}>{children}</button>
    </>
  );
}

export default Button
