/* eslint-disable react/prop-types */

function Button({handleReset, handleStart, children}) {
    function (){
        handleReset()
    }
  return (
    <>
      <button onClick={but} >{children}</button>
    </>
  );
}

export default Button
