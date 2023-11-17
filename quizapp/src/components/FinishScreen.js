export default function FinishScreen({
  points,
  maxPoints,
  highScore,
  dispatch,
}) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You Scored <storng>{points}</storng> out of
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">High Score: {highScore} points</p>
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart Quiz
        </button>
      </div>
    </>
  );
}
