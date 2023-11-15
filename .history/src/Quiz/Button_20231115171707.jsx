/* eslint-disable react/prop-types */

function Button({handle handleStart, children}) {
  return (
    <>
      <button onClick={handleStart}>{children}</button>
    </>
  );
}

export default Button
