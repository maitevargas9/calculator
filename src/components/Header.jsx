import CalculatorLogo from "../assets/calculator-logo.png";

export default function Header() {
  return (
    <div id="header">
      <img src={CalculatorLogo} alt="Calculator Logo" />
      <h1>Calculator</h1>
    </div>
  );
}
