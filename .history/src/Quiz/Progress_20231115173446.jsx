function Progress({num}) {
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