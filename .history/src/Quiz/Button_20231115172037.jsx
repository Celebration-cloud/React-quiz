/* eslint-disable react/prop-types */

function Button({handleReset, handleStart, children}) {
    function switch()
  return (
    <>
      <button onClick={switch}>{children}</button>
    </>
  );
}

export default Button
