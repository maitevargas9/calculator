import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

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
      <Button onButtonClick={handleButtonClick} />
    </div>
  );
}
