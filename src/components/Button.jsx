export default function Button({ onButtonClick }) {
  const buttonValues = [
    ["C", "π", "/", "*"],
    ["7", "8", "9", "-"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "="],
    ["0", "."]
  ];

  return (
    <div className="buttons">
      {buttonValues.flat().map(btn =>
        <button
          key={btn}
          className={
            btn === "="
              ? "equal"
              : btn === "C" ? "clear" : btn === "π" ? "operator" : ""
          }
          onClick={() => onButtonClick(btn)}
        >
          {btn}
        </button>
      )}
    </div>
  );
}
