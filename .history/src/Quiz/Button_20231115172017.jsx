/* eslint-disable react/prop-types */

function Button({handleReset, handleStart, children}) {
  return (
    <>
      <button onCl onClick={switch}>{children}</button>
    </>
  );
}

export default Button
