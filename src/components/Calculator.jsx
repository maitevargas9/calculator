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
    } else if (value === "sin") {
      if (input) {
        const radianValue = parseFloat(input) * (Math.PI / 180);
        const sinValue = Math.sin(radianValue);
        setLastCalculation(`sin(${input}) = ${sinValue}`);
        setInput(sinValue.toString());
      }
    } else if (value === "cos") {
      if (input) {
        const radianValue = parseFloat(input) * (Math.PI / 180);
        const cosValue = Math.cos(radianValue);
        setLastCalculation(`cos(${input}) = ${cosValue}`);
        setInput(cosValue.toString());
      }
    } else if (value === "tan") {
      if (input) {
        const radianValue = parseFloat(input) * (Math.PI / 180);
        const tanValue = Math.tan(radianValue);
        setLastCalculation(`tan(${input}) = ${tanValue}`);
        setInput(tanValue.toString());
      }
    } else if (value === "%") {
      if (input) {
        const percentValue = parseFloat(input) / 100;
        setLastCalculation(`${input}% = ${percentValue}`);
        setInput(percentValue.toString());
      }
    } else if (value === "±") {
      if (input) {
        const signToggled = (parseFloat(input) * -1).toString();
        setInput(signToggled);
      }
    } else if (value === "←") {
      setInput(input.slice(0, -1));
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
