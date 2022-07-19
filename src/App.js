import "./App.css";
import logo from "./img/RL_logo.png";
import Button from "./componentes/button.js";
import Screen from "./componentes/screen.js";
import ClearButton from "./componentes/clear_button";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const typeInput = (val) => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    }
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logo} alt="main-logo" />
      </div>
      <div className="calculator-container">
        <div className="row-screen">
          <Screen input={input} />
        </div>
        <div className="row">
          <Button input={typeInput}>1</Button>
          <Button input={typeInput}>2</Button>
          <Button input={typeInput}>3</Button>
          <Button input={typeInput}>+</Button>
        </div>
        <div className="row">
          <Button input={typeInput}>4</Button>
          <Button input={typeInput}>5</Button>
          <Button input={typeInput}>6</Button>
          <Button input={typeInput}>-</Button>
        </div>
        <div className="row">
          <Button input={typeInput}>7</Button>
          <Button input={typeInput}>8</Button>
          <Button input={typeInput}>9</Button>
          <Button input={typeInput}>*</Button>
        </div>
        <div className="row">
          <Button input={calculateResult}>=</Button>
          <Button input={typeInput}>0</Button>
          <Button input={typeInput}>.</Button>
          <Button input={typeInput}>/</Button>
        </div>
        <div className="row">
          <ClearButton clear={() => setInput("")}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
