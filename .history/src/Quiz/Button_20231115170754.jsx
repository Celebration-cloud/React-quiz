/* eslint-disable react/prop-types */

function Button({children}) {
  return (
    <>
      <button onClick={handleStart}>{children}</button>
    </>
  );
}

export default Button
