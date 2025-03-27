export default function Button({ label, onClick, className = "" }) {
  return (
    <button className={className} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}
