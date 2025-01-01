import { useState } from "react";

function Counter() {
  //State: count is a number with initial value 0
  const [count, setCount] = useState();
  //action :
  const increment = () => {
    setCount(count + 1);
  };

  //View
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>Count: {count}</h1>
    </div>
  );
}
