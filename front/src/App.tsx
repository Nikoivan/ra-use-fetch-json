import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useJsonFetch from "./services/useJsonFetch";

function App() {
  const [count, setCount] = useState(0);

  async function Ok() {
    const test = await useJsonFetch("http://localhost:7070/data");
    console.log(test);
  }

  async function Err() {
    const test = await useJsonFetch("http://localhost:7070/error");
    console.log(test);
  }

  async function Load() {
    const test = await useJsonFetch("http://localhost:7070/loading");
    console.log(test);
  }

  Ok();
  Err();
  Load();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
