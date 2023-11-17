import { useState } from "react";
import "./App.css";

import Data from "./componets/Data/Data";
import ErrorData from "./componets/ErrorData/ErrorData";
import LoadingData from "./componets/LoadingData/LoadingData";

function App() {
  const [count, setCount] = useState(0);

  // async function Ok() {
  //   const test = await useJsonFetch("http://localhost:7070/data");
  //   console.log(test);
  // }

  // async function Err() {
  //   const test = await useJsonFetch("http://localhost:7070/error");
  //   console.log(test);
  // }

  // async function Load() {
  //   const test = await useJsonFetch("http://localhost:7070/loading");
  //   console.log(test);
  // }

  // Err();
  // Load();

  return (
    <>
      <Data />
      <ErrorData />
      <LoadingData />
    </>
  );
}

export default App;
