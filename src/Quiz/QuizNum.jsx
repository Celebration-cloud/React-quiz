
function QuizNum({num, totalQuestion}) {
  return (
    <div>
        <p>Question: {num + 1}/{totalQuestion.length}</p>
    </div>
  )
}

export default QuizNum
