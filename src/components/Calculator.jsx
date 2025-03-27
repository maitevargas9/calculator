import { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [lastCalculation, setLastCalculation] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const expression = input.replace(/π/g, Math.PI);
        const result = eval(expression);
        setLastCalculation(`${input} = ${result}`);
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setLastCalculation(input);
      setInput("");
    } else if (value === "π") {
      setInput(input + "π");
    } else if (value === "x²") {
      if (input) {
        const squaredValue = Math.pow(parseFloat(input), 2);
        setLastCalculation(`${input}² = ${squaredValue}`);
        setInput(squaredValue.toString());
      }
    } else if (value === "x^x") {
      if (input) {
        const powerValue = Math.pow(parseFloat(input), parseFloat(input));
        setLastCalculation(`${input}^${input} = ${powerValue}`);
        setInput(powerValue.toString());
      }
    } else if (value === "√x") {
      if (input) {
        const sqrtValue = Math.sqrt(parseFloat(input));
        setLastCalculation(`√${input} = ${sqrtValue}`);
        setInput(sqrtValue.toString());
      }
    } else if (value === "ⁿ√x") {
      const values = input.split(",");
      if (values.length === 2) {
        const n = parseFloat(values[0]);
        const x = parseFloat(values[1]);
        if (n && x) {
          const rootValue = Math.pow(x, 1 / n);
          setLastCalculation(`${n}√${x} = ${rootValue}`);
          setInput(rootValue.toString());
        }
      } else {
        setInput("n,x");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display
        input={input}
        lastCalculation={lastCalculation}
      />
      <Buttons onButtonClick={handleButtonClick} />
    </div>
  );
}
