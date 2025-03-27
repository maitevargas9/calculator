import Button from "./Button";

export default function Buttons({ onButtonClick }) {
  const buttonValues = [
    ["C", "π", "x²", "x^x", "√x", "ⁿ√x", "sin", "cos", "tan"],
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"]
  ];

  return (
    <div className="buttons">
      {buttonValues
        .flat()
        .map(btn =>
          <Button
            key={btn}
            label={btn}
            onClick={onButtonClick}
            className={
              btn === "="
                ? "equal"
                : btn === "C"
                  ? "clear"
                  : [
                      "π",
                      "x²",
                      "x³",
                      "x^x",
                      "√x",
                      "ⁿ√x",
                      "sin",
                      "cos",
                      "tan"
                    ].includes(btn)
                    ? "operator"
                    : ""
            }
          />
        )}
    </div>
  );
}
