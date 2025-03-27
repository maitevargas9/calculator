export default function Display({ input, lastExpression, lastCalculation }) {
  return (
    <div className="display">
      <input type="text" value={input} disabled />
      {input === "" &&
        lastExpression &&
        lastCalculation &&
        <div className="last-calculation">
          <p>
            {lastExpression} = {lastCalculation}
          </p>
        </div>}
    </div>
  );
}
