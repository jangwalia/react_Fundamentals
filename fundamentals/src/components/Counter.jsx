import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  return (
    <>
      <button onClick={incrementCounter} className="btn">
        Clicked {count} Times
      </button>
      ;
    </>
  );
}
export default Counter;
