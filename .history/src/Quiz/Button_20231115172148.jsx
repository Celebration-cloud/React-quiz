/* eslint-disable react/prop-types */

function Button({handleReset, handleStart, children}) {
    function switch(){
        handleReset()
    }
  return (
    <>
      <button onClick={s} >{children}</button>
    </>
  );
}

export default Button
