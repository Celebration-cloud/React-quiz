/**
 * The above code is a React functional component called "Footer" that renders a div with a class name
 * of "footer" and displays its children.
 * @returns The Footer component is returning a div element with the className 'footer' and the
 * children passed to it.
 */
/* eslint-disable react/prop-types */
import './Footer.css'
function Footer({children}) {
  return (
    <div className='footer'>
      {children}
    </div>
  )
}

export default Footer
