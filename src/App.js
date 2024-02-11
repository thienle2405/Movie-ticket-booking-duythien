import "./App.css";
import { createBrowserHistory } from "history";
import AllRoute from "./components/AllRoute";

export const history = createBrowserHistory();

function App() {
  return (
    <>
      <AllRoute />
    </>
  );
}

export default App;
