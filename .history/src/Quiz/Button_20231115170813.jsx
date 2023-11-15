/* eslint-disable react/prop-types */

function Button({handlechildren}) {
  return (
    <>
      <button onClick={handleStart}>{children}</button>
    </>
  );
}

export default Button
