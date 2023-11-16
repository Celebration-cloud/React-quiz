/* The code is defining an initial state object for a React application. This initial state object
contains various properties such as `status`, `userAnswer`, `questionList`, `time`, `score`,
`index`, and `answers`. These properties are used to keep track of the current state of the
application. The `status` property is set to "loading" initially, indicating that the application is
in a loading state. The `userAnswer` property is set to `null`, indicating that the user has not
provided an answer yet. The `questionList` property is an empty array, indicating that there are no
questions yet. The `time`, `score`, `index`, and `answers` properties are all set to initial values
of 0 or an empty array. This initial state object can be used as a starting point for the
application's state and can be updated as the application progresses. */
const initialState = {
  status: "loading",
  userAnswer: null,
  questionList: [],
  time: 0,
  score: 0,
  index: 0,
  answers: []
};

export default initialState