function reducer(state, action) {
  const { score, index } = state;
  const { payload, type } = action;
  switch (type) {
    case "error":
      return { ...state, status: "Error occurred" };
    case "questionList":
      return { ...state, status: "ready", questionList: payload };
    case "begin":
      return { ...state, time: 120, status: "active" };
    case "userOption":
      return { ...state, userAnswer: payload };
    case "nextQuestion":
      return { ...state, time: payload, index: index + 1, userAnswer: null };
    case "answer":
      return { ...state, answers: payload };
    case "score":
      return { ...state, score: score + payload };
    case "timer":
      return { ...state, time: payload };
    case "reset":
      return {
        ...state,
        index: 0,
        status: "ready",
        time: 0,
        score: 0,
        answers: [],
        userAnswer: "",
      };
    default:
      throw new Error("Error");
  }
}

export def