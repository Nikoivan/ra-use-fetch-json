import "./App.css";

import Data from "./componets/Data/Data";
import ErrorData from "./componets/ErrorData/ErrorData";
import LoadingData from "./componets/LoadingData/LoadingData";

function App() {
  return (
    <>
      <Data />
      <ErrorData />
      <LoadingData />
    </>
  );
}

export default App;
