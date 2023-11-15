/* The code is defining a React functional component called `Progress`. It takes two props, `num` and
`totalQuestion`. Inside the component, it returns JSX code that renders a `<progress>` element. The
`value` attribute of the `<progress>` element is set to `num + 1`, and the `max` attribute is set to
the length of the `totalQuestion` array. The component is then exported as the default export. */
/* eslint-disable react/prop-types */
function Progress({num, totalQuestion}) {
  return (
    <>
      <progress
        style={{ width: "100%", height: "25px" }}
        value={num + 1}
        max={totalQuestion.length}
      ></progress>
    </>
  );
}

export default Progress
