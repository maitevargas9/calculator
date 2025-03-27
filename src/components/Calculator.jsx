import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [lastExpression, setLastExpression] = useState("");
  const [lastCalculation, setLastCalculation] = useState("");

  const handleClick = value => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(input).toString();
      setLastExpression(input);
      setInput(result);
      setLastCalculation(result);
    } catch (error) {
      setLastExpression("");
      setInput("Fehler");
      setLastCalculation("");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <Display
        input={input}
        lastExpression={lastExpression}
        lastCalculation={lastCalculation}
      />
      <div className="buttons">
        <Button value="1" onClick={handleClick} />
        <Button value="2" onClick={handleClick} />
        <Button value="3" onClick={handleClick} />
        <Button value="+" onClick={handleClick} />

        <Button value="4" onClick={handleClick} />
        <Button value="5" onClick={handleClick} />
        <Button value="6" onClick={handleClick} />
        <Button value="-" onClick={handleClick} />

        <Button value="7" onClick={handleClick} />
        <Button value="8" onClick={handleClick} />
        <Button value="9" onClick={handleClick} />
        <Button value="*" onClick={handleClick} />

        <Button value="0" onClick={handleClick} />
        <Button value="C" onClick={handleClear} />
        <Button value="/" onClick={handleClick} />
        <Button value="=" onClick={handleCalculate} />
      </div>
    </div>
  );
}
