/* eslint-disable react/prop-types */

function Button({handleReset, handleStart, children}) {
    function but(){
        handleReset()
    }
  return (
    <>
      <button onClick={but} >{children}</button>
    </>
  );
}

export default Button
