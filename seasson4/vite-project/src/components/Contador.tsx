import { useState, useEffect } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval: any = null;
    if (isRunning) {
      interval = setInterval(() => {
        setContador((prevContador) => prevContador + 1);
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={toggleRunning}>
        {isRunning ? "Pausar" : "Continuar"}
      </button>
    </div>
  );
}
