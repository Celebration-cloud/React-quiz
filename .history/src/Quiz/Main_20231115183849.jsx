/**
 * The Main component is a wrapper that renders its children inside a div.
 * @returns The Main component is returning a div element with the children prop rendered inside it.
 */
/* eslint-disable react/prop-types */
export default function Main({children}) {
  return (
    <div>
        {children}
    </div>
  )
}
