import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";

import UseContext from "./components/UseContext";
import { GlobalContextProvider } from "./components/UseContext/context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <UseState />
        <UseEffect />
        <UseContext />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
