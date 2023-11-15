/* eslint-disable react/prop-types */

function Button({handleReset, handleStart, children}) {
    function switch(){
        handleReset()
    }
  return (
    <>
      <button onClick={switch} >{children}</button>
    </>
  );
}

export default Button
