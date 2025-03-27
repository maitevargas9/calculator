export default function Display({ input, lastCalculation }) {
  return (
    <div className="display">
      <input type="text" value={input} readOnly />
      {lastCalculation &&
        <div className="last-calculation">
          {lastCalculation}
        </div>}
    </div>
  );
}
