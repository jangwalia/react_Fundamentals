import { useState } from "react";
import "../index.css";
function Counter() {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  return (
    <div>
      <button onClick={incrementCounter} className="ourCounter">
        Clicked {count} Times
      </button>
    </div>
  );
}
export default Counter;
