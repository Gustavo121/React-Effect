import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = 'React Hooks | useEffect';
  }, []);

  useEffect(() => {
    alert('Valor do counter ' + counter);
  }, [counter]);

  function increaseCounter() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h1>Pronto para codar!</h1>
      <h2>{counter}</h2>
      <button onClick={increaseCounter}>Aumentar o counter</button>
    </div>
  );
}

export default App;
