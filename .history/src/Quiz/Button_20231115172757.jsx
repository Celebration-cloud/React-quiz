/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */

function Button({handleReset, handleStart, children}) {
  return (
    <>
      <button =onClick={handleStart}>{children}</button>
    </>
  );
}

export default Button
