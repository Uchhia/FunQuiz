import { useReducer } from "react";
const intialState = {
  count: 0,
  step: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "incCount":
      return { ...state, count: state.count + action.payload };
    case "decCount":
      return { ...state, count: state.count - action.payload };
    case "defCount":
      return action.payload;
    case "defStep":
      return { ...state, step: action.payload };
    case "reset":
      return { count: 0, step: 0 };

    default:
      throw new Error("Unknown action");
  }
}
function DateCounter() {
  const [state, dispatch] = useReducer(reducer, intialState);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = function () {
    dispatch({ type: "decCount", payload: state.step });
  };

  const inc = function () {
    dispatch({ type: "incCount", payload: state.step });
  };

  const defineCount = function (e) {
    dispatch({ type: "defCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    //setStep(Number(e.target.value));
    dispatch({ type: "defStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
