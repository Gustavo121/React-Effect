import { useState, useEffect } from "react";

import SpecialComponent from "./SpecialComponent";

function App() {
  const [counter, setCounter] = useState(0);
  const [showComponent,setShowComponent] = useState(false)

  // componentWillMount - Componente vai montar
  useEffect(() => {
    document.title = 'React Hooks | useEffect';
  }, []);

  // componentWillUpdade - Quando o componente for atualizado
  useEffect(() => {
    alert('Valor do counter ' + counter);
  }, [counter]);

  function increaseCounter() {
    setCounter(counter + 1)
  }

  function handleComponentVisibility() {
    setShowComponent(!showComponent);
  }

  return (
    <div>
      <h1>Pronto para codar!</h1>
      <h2>{counter}</h2>
      <button onClick={increaseCounter}>Aumentar o counter</button>
      &nbsp;
      <button onClick={handleComponentVisibility}>
        {showComponent ? 'Esconder o componente' : 'Exibir componente espocial'}
      </button>
      <br />
      {showComponent && <SpecialComponent />}
    </div>
  );
}

export default App;
