import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PiChart from "./components/graphs/PiChart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact Component={LoginPage}></Route>
        <Route path="/home" exact Component={HomePage}></Route>
        <Route path="/pi" exact Component={PiChart}></Route>
      </Routes>
    </>
  );
}

export default App;
