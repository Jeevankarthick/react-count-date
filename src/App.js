import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // adding days to day
  let date = new Date(new Date());
  date.setDate(date.getDate() + count);
  date = date.toDateString();

  function handleCountDec() {
    setCount((count) => count - step);
  }

  function handleCountInc() {
    setCount((count) => count + step);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <div className="step">
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div className="count">
        <button onClick={handleCountDec}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleCountInc}>+</button>
      </div>
      <p className="result">
        {count === 0 && `Today is ${date}`}
        {count > 0 && `${count} days from today is ${date}`}
        {count < 0 && `${Math.abs(count)} days ago was ${date}`}
      </p>
      {step !== 1 || count !== 0 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}
