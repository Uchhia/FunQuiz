export default function NextButton({
  dispatch,
  answer,
  index,
  numOfQuestions,
}) {
  const hasAnswered = answer !== null;
  if (index < numOfQuestions - 1) {
    return (
      <div>
        {hasAnswered ? (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Next
          </button>
        ) : null}
      </div>
    );
  }
  if (index === numOfQuestions - 1) {
    return (
      <div>
        {hasAnswered ? (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "finished" })}
          >
            Finish
          </button>
        ) : null}
      </div>
    );
  }
}
