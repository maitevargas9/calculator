export default function Display({ input }) {
  return (
    <div className="display">
      <input type="text" value={input} disabled />
    </div>
  );
}
