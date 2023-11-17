export default function Progress({
  index,
  numOfQuestions,
  points,
  maxPoints,
  answer,
}) {
  console.log(answer);
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index}</strong>/{numOfQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPoints}
      </p>
    </header>
  );
}
