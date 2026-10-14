
import { useState, useEffect, useMemo } from "react";

function App() {
  const [color, setColor] = useState("black");
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const colors = useMemo(() => ["red", "blue", "orange", "purple"], []);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setColor(colors[count % colors.length]);
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, count, colors]);

  const toggleColor = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div style={{
      textAlign: "center",
      padding: "50px"
    }}>
      <h1>Color Box</h1>

      <div style={{
        width: "300px",
        height: "200px",
        backgroundColor: color,
        margin: "20px auto",
        borderRadius: "10px"
      }} />

      <p>Current Color: {color}</p>
      <p>Color Number: {(count % colors.length) + 1} / {colors.length}</p>

      <button onClick={toggleColor}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
}

export default App;
