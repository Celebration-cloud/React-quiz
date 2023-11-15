/* eslint-disable react/prop-types */

function Button({han handleStart, children}) {
  return (
    <>
      <button onClick={handleStart}>{children}</button>
    </>
  );
}

export default Button
