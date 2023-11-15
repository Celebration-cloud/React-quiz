/* eslint-disable react/prop-types */

function Button({handleReset, handleStart, children}) {
  return (
    <>
      // eslint-disable-next-line react/jsx-no-duplicate-props
      <button onClick={handleReset} onClick={handleStart}>{children}</button>
    </>
  );
}

export default Button
